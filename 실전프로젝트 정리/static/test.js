function uploadIMG(){
  let formData = $('form[name="area"]').serialize();
  let a_name = $('input[name="A_NAME"]').val();
  let file_name = $('input[name="file"]').val();
  if (a_name != "" && file_name != "") {
    $.ajax({
        url : "/set/map/upload_result", 
        type : 'POST', 
        data : formData, 
    }).then((result)=>{
      console.log(result);
      if (result["result"]){
        $('#A_SRC > .feedback').attr('class', "feedback valid-feedback");
        $('#A_SRC > .feedback').text(result["message"]);
      }else{
        $('#A_SRC > .feedback').attr('class', "feedback invalid-feedback");
        $('#A_SRC > .feedback').text(result["message"]);
      }
    });
  }
};

// let path = '';
// let plan = function( x, y, z ) {
//     y = -y - 1;
//     let limit = Math.ceil( 3 / Math.pow( 2, z ) );

//     if ( 0 <= y && y < limit && 0 <= x && x < limit ) {
//         return domain + path + 'planh' +
//             z + '_' + y + '_' + x + '.png';
//     } else {
//         return 'https://i1.daumcdn.net/dmaps/apis/white.png';
//     }
// };

// kakao.maps.Tileset.add( 'PLAN',
//         new kakao.maps.Tileset(
//             512, 512, plan, [], false, 0, 2) );

// let node = document.getElementById( 'map' );
// let map = new kakao.maps.Map( node, {
//     projectionId: null,
//     mapTypeId: kakao.maps.MapTypeId.PLAN,
//     $scale: false,
//     center: new kakao.maps.Coords( 650, -550 ),
//     level: 2
// } );
// let center = map.getCenter();
// let marker = new kakao.maps.Marker({
//     position: center
// });
// marker.setMap(map);