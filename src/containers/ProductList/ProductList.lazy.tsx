import React, { Suspense } from 'react';
import { ProductListProps } from './ProductList.types';

const LazyProductList =  React.lazy(() => import('./ProductList'));

/**
 * USAGE: ProductList description to complete.
 * @example
 * <ProductList /> 
 */
const ProductList = (props: JSX.IntrinsicAttributes & ProductListProps) => (
  <Suspense fallback={null}>
    <LazyProductList {...props} />
  </Suspense>
);
ProductList.displayName = 'ProductList Lazy Loaded';

export default ProductList;
