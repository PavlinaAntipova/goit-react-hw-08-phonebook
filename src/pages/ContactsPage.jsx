import FormContacts from "components/FormContacts";
import Filter from "components/Filter";
import ContactsList from "components/ContactsList";

export default function ContactsPage() {
    return <>
        <FormContacts />
        <Filter />
        <ContactsList/>
    </>
}