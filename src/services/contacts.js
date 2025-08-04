import createHttpError from 'http-errors';
import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllContacts = async ({
    page = 1,
    perPage = 10,
    sortOrder = SORT_ORDER.ASC,
    sortBy = '_id',
    filter = {},
}) => {
const limit = perPage;
    const skip = (page - 1) * perPage;

const contactsQuery = ContactsCollection.find();

if (filter.contactType) {
    contactsQuery.where('contactType').equals(filter.contactType);
}

if (filter.isFavourite !== null) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
}
const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery
        .skip(skip)
        .limit(limit)
        .sort({ [sortBy]: sortOrder })
        .exec(),
]);

const paginationData = calculatePaginationData(contactsCount, perPage, page);

return {
    data: contacts,
    ...paginationData,
};
};

export const getContact = async (contactId) => {
    const contact = await ContactsCollection.findById(contactId);
    return contact;
};

export const createContact = async (payload) => {
    const contact = await ContactsCollection.create(payload);
    return contact;
};

export const deleteContact = async (contactId) => {
const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
});
return contact;
};

export const patchContact = async (contactId, payload) => {
const contact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
        new: true,
    },
);

if (!contact) {
    throw createHttpError(404, 'Contact not found');
}
return contact;
};