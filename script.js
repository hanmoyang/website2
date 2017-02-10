var isGray = true;
console.log(isGray);

$('.header').on('click', function() {

	if (isGray == true) {
  	$('.header').css('background','#FFE4B5');
  	isGray = false;
  } else { 
  	$('.header').css('background','#90EE90');
    isGray = true;
  }
	
  console.log(isGray);
	
})
$('.timeButton').on('click', function() {
  $('.message').text('Beginning from Jan 27th to Feb 2nd. Jan 27th is the eve of New Year, Jan 28th is the first day of New Year, and Feb 11th is Lantern Festival which means the ending of the New Year. 2017 is a Year of Rooster.');
});

$('.foodButton').on('click', function() {
	$('.colorBox').css('background','red');
  $('.message').text('In northern China, it is customary to make dumplings (jiaozi) after dinner to eat around midnight. Dumplings symbolize wealth because their shape resembles a Chinese sycee. In contrast, in the South, it is customary to make a glutinous new year cake (niangao) and send pieces of it as gifts to relatives and friends in the coming days.');
});

$('.activitiesButton').on('click', function() {
	$('.colorBox').css('background','blue');
  $('.message').text('Traditionally, red envelopes or red packets are passed out during the Chinese New Year celebrations, from married couples or the elderly to unmarried juniors. It is also common for adults or young couples to give red packets to children.');
});


$('.foodButton').on('click', function pictureChange() {
  document.getElementById('2017rooster').src="http://www.kitchenproject.com/history/Dumplings/200/1-Chinese%20dumplings1.jpg";
});

$('.activitiesButton').on('click', function pictureChange() {
  document.getElementById('2017rooster').src="http://www.export.gov.il/UploadedImages/Hong%20Bao.jpg";
});

$('.timeButton').on('click', function pictureChange() {
  document.getElementById('2017rooster').src="http://fengshuiconsulting.info/wp-content/uploads/2016/10/Fire-Rooster-2017.jpg";
});