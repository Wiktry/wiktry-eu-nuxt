<script setup>

</script>

<template>
<div class="guide-content" >
  <div class="text-only title">
    <h2>Välkommen till Ordet!</h2>
  </div>
  <div class="text-only">
    <p>Spelet där du tävlar mot dig själv och dina vänner för att se vem som först kan hitta dagens ord.</p>
    <br />
    <p>För att hitta dagens ord behöver du testa dig fram genom att komma på svenska ord på fem bokstäver.
      Ordet måste finnas med i SAOL och får inte vara en böjning.</p>
  </div>
  <div class="guide-box">
    <div class="show-letter unused"> W </div>
    <p>Om en bokstav blir grå betyder det att den inte finns med i ordet.</p>
  </div>
  <div class="guide-box">
    <div class="show-letter misplaced"> G </div>
    <p>Om en bokstav blir gul betyder det att den finns med i ordet men är på fel plats.</p>
  </div>
  <div class="guide-box">
    <div class="show-letter correct"> A </div>
    <p>Och om en bokstav blir grön betyder det att den finns med i ordet och är på rätt plats.</p>
  </div>
  <div class="text-only">
    <p>Efter midnatt ändras ordet och då kan du spela igen!</p>
  </div>
</div>
</template>

<style scoped>
.guide-content {
  display: grid;
  grid-template-rows: .3fr 1.7fr .7fr .7fr .7fr .6fr;
  row-gap: 10px;
  padding: 10px 20px;
  align-items: center;
}
.guide-box {
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 10px;
  align-items: center;
  justify-items: center;
}
.title {
  text-align: center;
}
.show-letter {
  height: 50px;
  width: 50px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-weight: 600;
  font-size: 1.6em;
  line-height: 0;
  text-transform: capitalize;

  border: 2px solid var(--border-color);
}
.unused {
  background-color: var(--unused-background-color);
}
.misplaced {
  background-color: var(--misplaced-background-color);
}
.correct {
  background-color: var(--correct-background-color);
}

@media (max-height: 600px) {
  .guide-content {
    font-size: .9rem;
  }
}
</style>