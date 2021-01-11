
//  vue-dischi
// Istruzioni:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout 

let app = new Vue ({
	el: "#app",
    data : {
		autori: [
			
		]
    },
    mounted () {
		for (let index = 0; index < 10; index++) {
			axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then(response => {
				console.log(response);       
				// let autore = response.data.response;
				// this.autori.push(autore[index].author);
		})
}
	}
});
// $(document).ready(function() {
// 	//Code

// {
//             "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//             "title": "New Jersey",
//             "author": "Bon Jovi",
//             "genre": "Rock",
//             "year": "1988"
//         },


// });



/*


for (let index = 0; index < 10; index++) {

	

}



*/