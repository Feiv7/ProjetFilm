<template>
	<div id="app" :class="cmpMainTheme">
		<!-- Display child component has an HTML tag -->
		<HeaderMain 
			:item="cmpHeaderContent"
		/>

		<main> 
			<router-view :key="$route.name" />
		</main>

		
		<FooterMain 
			:item="cmpFooterContent"
		/>
		
	</div>
</template>

<script>
	/* 
		[IMPORT] Component
	*/
		import HeaderMain from './components/main/HeaderMain.vue';
		import FooterMain from './components/main/FooterMain.vue';
	//


	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'app',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { HeaderMain, FooterMain },
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data: function() {
					return {
						cmpMainTheme: 'small-theme',
						cmpHeaderContent: {
							title: 'Films, séries TV et bien plus en illimité',
							subtitle: 'Lorem ipsum <b>dolor ismet</b>',
							image: '@/assets/noun-popcorn-4269572.png'
						},
						cmpFooterContent: 'Azertyuiop'
					};
				},
			//

			/*
				[VUE] Computed => https://bit.ly/3u92MZv
				Used to check 'data' sub-properties or 'props' before use it
			*/
				methods: {
					/* 
						[UI] initUserInterface()
						Used to define main HTML tags height
					*/
						initUserInterface: async function() {
							window.addEventListener('resize', () => {
								if (window.innerWidth <= 600) { this.cmpMainTheme = "small-theme" } 
								else if (window.innerWidth > 600 && window.innerWidth < 1200) { this.cmpMainTheme = "medium-theme" }
								else if (window.innerWidth >= 1200) { this.cmpMainTheme = "large-theme" }

							})
						},
					//
				},
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
					[HOOK] Mounted => https://bit.ly/3IHFa26
					Called after the instance has been mounted
				*/
					mounted: async function(){
						/* 
							[UI] initUserInterface()
							Used to define main HTML tags height
						*/
							this.initUserInterface();
						//
					},
				//

				/* 
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
<style>
@import './css/style.css';
</style>
