<template>
<div>
    <div class="Less_header">
        <div class="Less_header_top">约课记录</div>
        <div class="Less_header_bottom">
            <div class="Less_header_div" @click="a(0)">待上课</div>
            <div class="Less_header_div" @click="b(1)">已上课</div>
            <div class="Less_header_div" @click="c(2)">已取消</div>
        </div>
    </div>
    <div class="Less_cont">
        <keep-alive>
            <component :is="pageName" />
        </keep-alive>
    </div>
</div>
</template>

<script>
import Classes from "@/components/lesson/Classes";
import Goclass from "@/components/lesson/Goclass";
import Cancel from "@/components/lesson/Cancel";
export default {
    data() {
        return {
            isActive: 0
        };
    },
    components: {
        Classes,
        Goclass,
        Cancel
    },
    computed: {
        pageName() {
            switch (this.isActive) {
                case 0:
                    return "Classes";
                    break;

                case 1:
                    return "Goclass";
                    break;

                default:
                    return "Cancel";
                    break;
            }
        }
    },
    methods: {
        a(index) {
            this.isActive = index;
        },
        b(index) {
            this.isActive = index;
        },
        c(index) {
            this.isActive = index;
        }
    }
};
</script>

<style scoped>
.Less_header {
    margin: 0px;
    width: 100%;
    height: 1.8rem;
}

.Less_header_top {
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.35rem;
    font-weight: 100;
    border-bottom: 0.01rem solid gainsboro;
}

.Less_header_bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 100;
    font-size: 0.3rem;
    color: gray;
    line-height: 0.9rem;
}
.Less_header_div:hover{
  color: orangered;
  border-bottom:0.01rem solid orangered;
}
</style>
