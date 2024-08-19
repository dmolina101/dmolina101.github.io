<template>
    <div :class="'alert alert-'+data.class" id="alert" role="alert" v-if="data.show">
        <div v-html="data.message"></div>
        <button @click="close"
                aria-label="Close"
                class="btn-close"
                type="button"
                v-if="props.options.iconCloseButton"></button>
        <div class="progress" style="height: 3px;" v-if="data.timer">
            <div :class="'progress-bar '+data.progressClass" role="progressbar" :style="'width: '+ data.progress +'%;'"></div>
        </div>
        <hr v-if="buttonSeparator">
        <div class="wrapper-buttons" v-if="data.type == 'confirm'">
            <button @click="iAgree"
                    class="btn btn-primary"
                    type="button"
                    v-if="data.iAgreeButton.show">{{ data.iAgreeButton.text }}</button>
            <button @click="noAgree"
                    class="btn btn-primary"
                    type="button"
                    v-if="data.noAgreeButton.show">{{ data.noAgreeButton.text }}</button>
        </div>
    </div>
</template>

<script>

    import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'

    export default defineComponent({
        emits: ['closed', 'iAgree', 'noAgree', 'opened'],
        props: {
            options: {
                Object,
                default() {
                    return {
                        closeButton: {
                            show: false,
                            text: 'Close'
                        },
                        iAgreeButton: {
                            show: false,
                            text: 'Yes'
                        },
                        iconCloseButton: false,
                        message: '',
                        noAgreeButton: {
                            show: false,
                            text: 'No'
                        },
                        show: false,
                        timer: 0,
                        type: 'light'
                    }
                }
            }
        },
        setup(props, { emit }) {

            const data = reactive({})
            const time = ref(null)

            onMounted(() => {
                Object.assign(data, initData())
            })

            watch(() => [
                props.options.closeButton,
                props.options.iAgreeButton,
                props.options.message,
                props.options.noAgreeButton,
                props.options.show,
                props.options.timer/*,
                data.show*/
            ], (newValue, oldValue) => {
               
                data.closeButton = alertButton(newValue[0], 'Close')
                data.iAgreeButton = alertButton(newValue[1], 'Yes')
                data.message = (newValue[2]) ? newValue[2] : ""
                data.noAgreeButton = alertButton(newValue[3], 'No')
                data.show = (newValue[4]) ? newValue[4] : false
                data.timer = timerData
                data.type = typeData

                /*if(newValue[6] !== oldValue[6] && typeof oldValue[6] !== 'undefined') {
                    console.log("PASOOOOOOOOOO")
                    console.log(newValue[6])
                    console.log("===============")
                    data.show = newValue[6];
                    (data.show) ? open() : close()
                }*/
              
                if(newValue[5] > 0 && typeof oldValue[5] !== 'undefined') {
                    timer()
                }
                
                type()

            });

            const buttonSeparator = computed(() => {
                /*console.log("=====================")
                console.log(data.iAgreeButton.show)
                console.log(data.noAgreeButton.show)
                console.log("=====================")*/
                return (data.iAgreeButton.show === true || data.noAgreeButton.show === true)
            })

            const initData = () => {

                return {
                    class: '',
                    closeButton: {
                        show: false,
                        text: 'Close'
                    },
                    iAgreeButton: {
                        show: false,
                        text: 'Yes'
                    },
                    message: '',
                    noAgreeButton: {
                        show: false,
                        text: 'No'
                    },
                    progress: 0,
                    progressClass: '',
                    show: false
                }
                
            }

            const timerData = computed(() => {
                return props.options.timer || 0
            })

            const typeData = computed(() => {
                return props.options.type || 'light'
            })

            const alertButton = (btnData, defaultText) => {
             
                if(typeof btnData === "undefined" || btnData === null) {
                    return {
                        show: false,
                        text: defaultText
                    }
                } else {
                    return {
                        show: (btnData.show) ? btnData.show: false,
                        text: (btnData.text) ? btnData.text : defaultText
                    }
                }

            }

            const close = async () => {

                let newData = await initData()
                Object.assign(data, newData)
                clearTimeout(time.value)
                emit('closed')
                console.log("CLOSED")

            }

            const iAgree = () => {
                emit('iAgree')
                close()
            }

            const noAgree = () => {
                emit('noAgree')
                close()
            }

            const open = () => {
                emit('opened')
            }

            const timer = () => {
               
                let progress = (100 / data.timer)
                if(data.progress <= 100) {
                    
                    time.value = setTimeout(() => {
                        data.progress += progress
                        timer(progress)
                    }, 1000)

                } else {
                    close()
                }

            }

            const type = () => {

                let type = data.type
                let types = {
                    "confirm" : {
                        class : "warning",
                    },
                    "error" : {
                        class : "danger"
                    },
                    "info" : {
                        class : "info"
                    },
                    "warning" : {
                        class : "warning"
                    },
                    "success" : {
                        class : "success"
                    }
                }

                data.class = (types[type]) ? types[type].class : "light"
                data.progressClass = (types[type]) ? "bg-" + types[type].class : ""

            }

            return {
                buttonSeparator,
                close,
                data,
                iAgree,
                noAgree,
                props
            }

        }
    })

</script>

<style lang="less" scoped src="../assets/less/components/Alert.less"></style>
