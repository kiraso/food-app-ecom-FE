import { JSXElementConstructor, PropsWithChildren, ReactNode } from 'react';

interface Props {
  components: Array<JSXElementConstructor<PropsWithChildren<any>>>;
  children: ReactNode;
}

export default function Compose(props: Props) {
  const { components = [], children } = props;
  if (components.length === 0) {
    throw new Error('Component array needed');
  }
  if (!children) {
    throw new Error('Children need');
  }

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}
