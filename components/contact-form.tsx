'use client';
import { useSearchParams } from 'next/navigation';
import EnquiryForm from './enquiry-form';
export default function ContactForm({enabled}:{enabled:boolean}){
 const params=useSearchParams();
 const programme=params.get('programme')||'';
 return <EnquiryForm key={programme} enabled={enabled} programme={programme}/>;
}
