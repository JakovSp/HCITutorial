import React from "react"
import HeaderFooterLayout from "../layout/headerFooter"
import ContactSeparator from '../modules/ContactSeparator'
import ContactForm from '../modules/ContactForm'

const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage