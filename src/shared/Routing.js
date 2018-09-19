export const routeParams = {
    networkId: ':networkId',
    blockHeight: ':height',
    transactionId: ':transactionId',
    address: ':address'
};

export const routeBuilder = (networkId) => {
    const root = `/${networkId}`;
    const blocks = `${root}/blocks`;

    return {
        root,
        nodes: {
            list: `${root}/nodes`
        },
        peers: {
            list: `${root}/peers`
        },
        blocks: {
            list: blocks,
            one: (height) => `${blocks}/${height}`
        },
        transactions: {
            one: (id) => `${root}/tx/${id}`
        },
        addresses: {
            one: (address) => `${root}/address/${address}`
        }
    };
};
