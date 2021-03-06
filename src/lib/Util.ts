export function createMethodDecorator(fn: MethodDecorator): Function {
    return fn;
}

export function enumerable(value: boolean): Function {
    return createMethodDecorator((_target, _propertyKey, descriptor) => {
        if (descriptor) descriptor.enumerable = value;
    });
}
