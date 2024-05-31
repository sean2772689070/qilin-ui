export const virtualProps = {
  size: {
    type: Number,
    default: 30
  },
  remain: {
    type: Number,
    default: 8
  },
  items: {
    type: Array,
    default: () => []
  }
};
