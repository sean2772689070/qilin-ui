import { defineComponent, inject, toRefs } from 'vue';
import { treeInjectKey, treeNodeContentProps } from './tree.ts';

export default defineComponent({
  name: 'QiTreeNodeContent',
  props: treeNodeContentProps,
  setup(props) {
    const treeContext = inject(treeInjectKey);
    const { node } = toRefs(props);
    return () => {
      return treeContext?.slots.default
        ? treeContext?.slots.default({ node: node.value })
        : node.value!.label;
    };
  }
});
