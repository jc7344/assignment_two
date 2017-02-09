Tbutton.onclick = function pictureChange()
{
document.getElementById('santiago').src="https://thelastofthemillenniums.files.wordpress.com/2015/12/trump81.jpg";
map.setCenter(new google.maps.LatLng(38.8976763,-77.03652979999998));
}

$('.homeButton').on('click', function() {
	map.setCenter(new google.maps.LatLng(40.6921398,-73.94470530000001));
});

$('.schoolButton').on('click', function() {
	map.setCenter(new google.maps.LatLng(40.72951339999999,-73.99646089999999));
});