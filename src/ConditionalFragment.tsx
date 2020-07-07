import * as React from 'react';

export interface ConditionalFragmentProps {
    showIf: boolean,
    children?: React.ReactNode,
}

/**
 * React component that only renders its contents if props.showIf is true.
 * 
 * This is designed to make a more readable version of {condition? (<SomeComponentsHere>...</SomeCompnentsHere>): null} were its helpful,
 * but is not designed to replace that pattern altogether, in particular, that pattern is always better when an else or condition chaining is to be used.
 * 
 * @param props
 */
export const ConditionalFragment = (props: ConditionalFragmentProps) => {
    const { showIf, children } = props;

    if (!showIf) {
        return (<></>);
    }

    return (<>{children}</>);
};
