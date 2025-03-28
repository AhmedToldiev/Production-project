import React from 'react';

type Mods = Record<string, boolean | string>;

export default function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
