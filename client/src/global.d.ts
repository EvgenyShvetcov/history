declare module '*.scss' {
  const __map: { [key: string]: string };
  export default __map;
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.HTMLAttributes<SVGElement>>;
}

declare module '*.jpg' {
  const __url: string;
  export default __url;
}
