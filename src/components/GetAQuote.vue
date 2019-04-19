<template>
  <section class="quote">
    <div class="quote__cta">
      <h1>Get a quote</h1>
      <p>Simply choose the service you need from the list below.</p>
    </div>
    <Leaf/>
  </section>
</template>

<script>
import Leaf from "@/components/Leaf";
export default {
  components: { Leaf }
};
</script>

<style lang="scss">
.quote {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 3rem;

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.leaf {
  @media (max-width: $mobile) {
    display: none;
  }
}
</style>
