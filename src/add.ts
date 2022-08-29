export default function add(...args: number[]) {
  return args.reduce((prev, next) => {
    return prev + next;
  });
}
