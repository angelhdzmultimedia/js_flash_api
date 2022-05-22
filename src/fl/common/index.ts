const FLalert = (msg: string) => alert(msg);
const FLtrace = (...args: any[]) => console.log.apply(console, [...args]);

export { FLalert };
export { FLtrace };
