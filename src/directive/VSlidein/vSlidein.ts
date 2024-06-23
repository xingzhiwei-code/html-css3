import { DirectiveBinding } from "vue";

const DISTANCE = 150;
const DURATION = 500;

// 暂存绑定的动画，使用weakmap，防止内存泄漏
const map = new WeakMap();

// 观察器
const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            // 元素与视口相交（播放动画）
            const animation = map.get(entry.target);
            if (animation) {
                animation.play();
                observer.unobserve(entry.target);
            }
        }
    }
})

function isBelowViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return rect.top - DISTANCE > window.innerHeight;
}

/**
 * Vue directive: v-slide-in
 * 
 * 解释注意点：
 * 1. 为什么不用 el.style.transform = 'translateX(100px)' 实现，因为直接改变 dom 属性会跟用户传进来的产生冲突
 * 故：使用 Aninmation API，给一个元素产生一个动画（不会改动 dom 树）
 * 
 * 2. 为什么不用 entry.target.getAnimations()，因为用户用可能在外面也用这个API绑定过动画
 */
export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (!isBelowViewport(el)) {
            return;

        }
        const animation = el.animate(
            [
                {
                    transform: `translateY(${DISTANCE}px)`,
                    opacity: 0.5,
                },
                {
                    transform: `translateY(0)`,
                    opacity: 1,
                }
            ],
            {
                duration: DURATION,
                fill: "forwards",
                easing: "ease-in-out",
            }
        );
        // 一开始动画暂停
        animation.pause();
        observer.observe(el);
        map.set(el, animation);
    },
    onMounted(el: HTMLElement) {
        observer.unobserve(el);
    }
}

