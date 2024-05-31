import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch
} from 'vue';
import { virtualProps } from './virtualType';
import { createNamespace } from '@qilin-ui/utils';

export default defineComponent({
  name: 'QiVirtualList',
  props: virtualProps,
  setup(props, { slots }) {
    const bem = createNamespace('virtual');
    const wrapperRef = ref<HTMLElement>();
    const barRef = ref<HTMLElement>();
    const state = reactive({
      //计算显示的区域
      start: 0,
      end: props.remain
    });
    // 多展示上下八条
    const prev = computed(() => {
      return Math.min(state.start, props.remain);
    });

    const next = computed(() => {
      return Math.max(props.remain, props.items.length - state.end);
    });

    const visibleData = computed(() => {
      return props.items.slice(
        state.start - prev.value,
        state.end + next.value
      );
    });

    const offset = ref(0);

    const handleScroll = () => {
      const scrollTop = wrapperRef.value!.scrollTop;
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;
      offset.value = state.start * props.size - props.size * prev.value; //滚过去了多少个
    };

    const initWrapper = () => {
      wrapperRef.value!.style.height = props.remain * props.size + 'px';
      barRef.value!.style.height = props.items.length * props.size + 'px';
    };
    watch(() => props.items, initWrapper);
    onMounted(() => initWrapper());
    return () => {
      return (
        <div class={bem.b()} ref={wrapperRef} onScroll={handleScroll}>
          <div class={bem.e('scroll-bar')} ref={barRef}></div>
          <div
            class={bem.e('scroll-list')}
            style={{ transform: `translate3d(0,${offset.value}px, 0)` }}
          >
            {visibleData.value.map((node) => slots.default!({ node }))}
          </div>
        </div>
      );
    };
  }
});
