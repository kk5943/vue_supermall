import { debounce } from './utils.js'
import BackTop from 'content/backTop/BackTop'
export const imageLoadListenerMixin = {
    data() {
        return {
            imageLoadListener: null,
            newRefresh: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.newRefresh = debounce(this.$refs.scroll.refresh, 50)
            this.imageLoadListener = () => {
                this.newRefresh()
            }
            this.$bus.$on('itemImageLoad', this.imageLoadListener)
            console.log('混入成功')
        })
    }
}
export const backTopMixin = {
    data() {
        return {
            isShowTop: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        },
        listenShowBack(position) {
            this.isShowTop = -position.y > 1500
        }
    }
}