export default function add(...args) {
  return args.reduce((prev, next) => {
    return prev + next;
  });
}
