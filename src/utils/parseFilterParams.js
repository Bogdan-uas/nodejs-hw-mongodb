const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

    if (isContactType(contactType)) return contactType;
};

const parseFavourite = (isFavourite) => {
    const isBoolean = typeof isFavourite === 'string';
    if (!isBoolean) return;

    const hasFavourite = (isFavourite) => ['true', 'false'].includes(isFavourite);

    if (hasFavourite(isFavourite)) return isFavourite;
};

export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;

    const parsedContactType = parseContactType(contactType);
    const parsedFavourite = parseFavourite(isFavourite);

    return {
        contactType: parsedContactType,
        isFavourite: parsedFavourite,
    };
};