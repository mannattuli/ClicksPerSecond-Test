<script>
    import { slide } from 'svelte/transition';
	import "../global.css"
	// import { themeName } from '../theme'
	$:themeName = 'Dark'; 

    let themes = [
		{
			name: "Blank",
		},
        {
            name: "Dark",
        },
        {
            name: "Light",
        },
		{
			name: "Miami",
		},
		{
            name: "Matrix",
        },
		{
			name: "Bliss"
		}
    ]

    let themeOpen = false;

    function open(){
        if (themeOpen){
            themeOpen = false;
        }
        else {
            themeOpen = true;
        }
    }
	
	let clicks = 0
	let score = 0;
	$: hide = 'false';
	let timeFunc = function () {
		setTimeout(function () {
			score= clicks / 5;
			hide = 'true';
		}, 5000);
	};
	let clickHandle = function(){
		clicks ++;
	}
</script>

<main>
	<h1>CPS Test</h1>
	<p>made by <a href="https://mannattuli.vercel.app" target="_blank">mannattuli</a></p>
	<div id="clickPad" on:click|once={timeFunc} on:click={clickHandle}
	class="center {hide === 'true' ? 'hidden' : ''}"></div>
	{#if score != 0}
		<p>{score}</p>
	{/if}

	<div id="theme">
		<div on:click={open}>
			<i class="fa fa-paint-brush" aria-hidden="true"></i> {themeName}
		</div>
	</div>

	<div id="socials">
		<a href="https://github.com/mannattuli" target="_blank">
			<i class="fa fa-code"></i> Github
		</a>
		<a href="https://twitter.com/mannattuli" target="_blank">
			<i class="fa fa-twitter"></i>
			Twitter
		</a>
		<a href="/about">
			<i class="fa fa-info"></i> 
			About
		</a>	
	</div>
</main>

{#if themeOpen}
    <div id="modal" in:slide out:slide>
        {#each themes as theme}
            <div class="themes" on:click={() => themeName = theme.name} on:click="{open}">
                {theme.name}
            </div>
            <br />
        {/each}
    </div>
    <div class="overlay" on:click="{open}"></div>
{/if}

<svelte:head>
<link rel="stylesheet" href= 
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

{#if themeName === 'Matrix'}
<style>
	:root {
		--color: #15ff00;
		--dark-color: #026602;
		--light-color: #adffa7;
        --bg-color: #000000;
        --pad-color: #121212;
        --active-color: #000;
        --error-color: #da3333;
		--error-dark-color: #791717;
	}
</style>
{/if}
{#if themeName === 'Dark'}
<style>
    :root {
		--color: #e2b714;
		--dark-color: #e2b714;
		--light-color: #ffefb5;
        --pad-color: #121212;
        --bg-color: #202020;
        --active-color: #000;
        --error-color: #da3333;
		--error-dark-color: #791717;
	}
</style>
{/if}
{#if themeName === 'Light'}
<style>
    :root {
		--color: #000;
		--dark-color: #000;
		--light-color: #7a7a7a;
        --pad-color: #bdbdbd;
        --active-color: #000;
        --bg-color: #fff;
        --error-color: #da3333;
		--error-dark-color: #791717;
	}
</style>
{/if}
{#if themeName === 'Miami'}
<style>
    :root {
		--color: #202020;
		--dark-color: #48373d;
		--light-color: #121212;
        --pad-color: #83616e;
        --active-color: #48373d;
        --bg-color: #b8a7aa;
        --error-color: #da3333;
		--error-dark-color: #791717;
	}
</style>
{/if}
{#if themeName === 'Bliss'}
<style>
	:root {
	--color: #47bac0;
	--dark-color: #e4609b;
	--light-color: #fff;
	--pad-color: #e4609b;
	--active-color: #7e1d49;
	--bg-color: #18181a;
	--error-color: #da3333;
	--error-dark-color: #791717;
	}
</style>
{/if}