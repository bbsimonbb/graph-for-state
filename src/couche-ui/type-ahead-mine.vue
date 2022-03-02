<script>
export default {
    props: ['sourceStringArray'],
    data() {
        return { userInput: '' }
    },
    computed: {
        candidates() {
            var returnVal = {
                startsWith: [],
                wordStartsWith: [],
                contains: []
            }

            sourceStringArray.forEach((sourceString) => {
                if (sourceString.startsWith(this.userInput))
                    returnVal.startsWith.push(sourceString);
                if (sourceString.contains(' ' + this.userInput))
                    returnVal.wordStartsWith.push(sourceString)
                if (sourceString.contains(this.userInput) && !sourceString.startsWith(this.userInput))
                    returnVal.contains.push(sourceString)
                return returnVal;
            })
        }
    }
}
</script>
<template>
    <div>
        <div contenteditable="true">{</div>
    </div>
</template>