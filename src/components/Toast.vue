<template>
    <div :class="'toast-container p-3 '+toast.containerClass">
        <div aria-live="assertive"
             aria-atomic="true"
             class="toast fade"
             :data-bs-autohide="props.autohide"
             :id="id"
             role="alert"
             v-for="(id, index) in props.ids">
            <div :class="'toast-header '+ toast.toastClass">
                <strong class="me-auto">{{ props.title }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" v-if="props.closeButton"></button>
            </div>
            <div class="toast-body">
                <p v-html="props.message"></p>
                <div class="mt-2 pt-2 border-top" v-if="props.actionButton.show || props.closeButton.show">
                    <button class="btn btn-primary btn-sm"
                        type="button"
                        v-if="props.actionButton.show && !toast.loading"
                        @click="accept">{{ props.actionButton.text }}</button>
                    <button class="btn btn-secondary btn-sm"
                        data-bs-dismiss="toast"
                        type="button"
                        v-if="props.closeButton.show && !toast.loading">{{ props.closeButton.text }}</button>
                    <div class="spinner-border" role="status" v-if="toast.loading">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { defineComponent, onMounted, reactive, ref, watch } from 'vue'
    import * as bootstrap from 'bootstrap'

    export default defineComponent({
        emits: ['accept', 'toastClosed'],
        props: {
            actionButton: {
                default: {
                    show: false,
                    text: null
                },
                type: Object
            },
            autohide: {
                default: true,
                type: Boolean
            },
            closeButton: {
                default: () =>  ({
                    show: false,
                    text: "Cerrar"
                }),
                type: Object
            },
            ids: Array,
            loading: {
                default: true,
                type: Boolean
            },
            message: {
                default: "",
                type: String
            },
            placement: {
                default: "default",
                type: String
            },
            title: {
                default: "",
                type: String
            },
            type: {
                default: "",
                type: String
            }
        },
        setup(props, { emit }) {

            watch(() => [
                props.loading,
                props.placement,
                props.type,
            ], (newValue, oldValue) => {

                if(newValue[1] !== oldValue[1] || newValue[2] !== oldValue[2]){
                    toastType(newValue[2], newValue[1])
                }

                toast.loading = newValue[0]

            });

            const toast = reactive({
                containerClass: "",
                loading: false,
                toastClass: ""
            })

            onMounted(() => {
                setToastInstance()
                toastType(props.type, props.placement)
            })

            const setToastInstance = () => {

                props.ids.forEach((id, index) => {
                    setToastEvents(id)
                });

            }

            const setToastEvents = (id) => {

                let toastEle = document.getElementById(id)
                let toastInstance = bootstrap.Toast.getOrCreateInstance(toastEle)

                toastEle.addEventListener('hidden.bs.toast', () => {
                    closeToast()
                })

            }

            const closeToast = () => {
                emit('toastClosed')
                toast.containerClass = ""
                toast.loading = false
                toast.toastClass = ""
            }

            const toastType = (type, placement) => {

                let toastPlacement = {
                    "default" : "",
                    "middle-center" : "d-flex justify-content-center align-items-center w-100"
                }

                let types = {
                    "confirm" : "bg-warning show",
                    "default" : "",
                    "error" : "bg-danger",
                    "warning" : "bg-warning",
                    "success" : "bg-success"
                }

                toast.containerClass = (toastPlacement[placement]) ? toastPlacement[placement] : toastPlacement.default
                toast.toastClass = (types[type]) ? types[type] : types.default

            }

            const accept = () => {
                emit('actionClicked')
            }

            return {
                accept,
                toast,
                toastType,
                props
            }

        }
    })

</script>

<style lang="less" scoped src="../assets/less/components/toast.less"></style>
