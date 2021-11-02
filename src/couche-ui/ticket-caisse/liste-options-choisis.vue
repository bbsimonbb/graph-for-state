<script>
export default {
    inject:['bibState']
}
</script>
<template>
    <div class="accordion-item-content options-content">
        <ul class="bullet">
            <li v-for="option in bibState.listeOptionsChoisis.liste">
                <span>{{$t(option)}}</span>
            </li>
        </ul>
    </div>
</template>