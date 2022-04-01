<template>
	<div 
		class="register-view-component"
	>
		<main>
    <section class="image-selec">
        <ul>
            <li><img src="../assets/affescobar.jpg" alt="escobar"></li>
            <li><img src="../assets/affgravity.jpg" alt="gravity"></li>
            <li><img src="../assets/affjoker.jpg" alt="joker"></li>
            <li><img src="../assets/affjsul.jpg" alt="jesuisunelegende"></li>
            <li><img src="../assets/affmeilleurfilmtoutlestemps.jpg" alt="leseigneurdesanneaux"></li>
        </ul>
    </section>
    <section class="form">
        <h2>Remplissez le formulaire</h2>
        <form action="#">
            <label for="Pseudo">Pseudo</label>
            <input type="text" id="Pseudo" placeholder="Pseudo" aria-required="true" name="Pseudo" autofocus>
            <label for="email">Mail</label>
            <input type="email" id="email" placeholder="Mail" aria-required="true" name="mail">
            <label for="mdp">Mot de passe</label>
            <input type="password" id="mdp" placeholder="Mot de passe" aria-required="true" name="mdp">
            <label for="Ville">Ville</label>
            <input type="text" id="Ville" placeholder="Ville" aria-required="true" name="ville">


            <input type="submit" value="Valider">
        </form>
        <a class="bouton-form" href="./">Retour à la boutique</a>
    </section>
	</main>
	</div>
</template>

<script>
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'RegisterView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return { }
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
				methods:{ },
			//

			/*
				[VUE] Hooks => https://bit.ly/3s7AwEa
				Used for Vue.js component life cycle
			*/
				/* 
					[HOOK] Created
					Called synchronously after the instance is created
				*/
					created: async function(){},
				//
				

				/* 
					[HOOK] Mounted
					Called after the instance has been mounted
				*/
					mounted: async function(){},
				//

				/* 
					// Called synchronously after the instance has been initialized
					created: async function(){},

					// Called synchronously after the instance is created
					created: async function(){},

					// Called right before the mounting begins
					beforeMount: async function(){},

					// Called after the instance has been mounted
					mounted: async function(){},

					// Called when data changes
					beforeUpdate: async function(){},

					// Called after a data change
					updated: async function(){},

					// Called when a kept-alive component is activated
					activated: async function(){},

					// Called when a kept-alive component is deactivated
					deactivated: async function(){},

					// Called right before a component instance is unmounted
					beforeUnmount: async function(){},

					// Called after a component instance has been unmounted
					unmounted: async function(){},

					// Called when an error from any descendent component is captured
					errorCaptured: async function(){},

					// Called when virtual DOM re-render is tracked
					renderTracked: async function(){},

					// Called when virtual DOM re-render is triggered
					renderTriggered: async function(){},
				*/
			//
		}
	//
</script>
<style scoped></style>