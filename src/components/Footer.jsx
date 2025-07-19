import { Mail, MapPin, Phone } from "lucide-react";
import Image from "../assets/hero1.jpg"; 

export default function Footer() {
  return (
    <footer className="bg-[#1f3b57] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>End-to-End Medical Billing</li>
            <li>Revenue Cycle Management (RCM)</li>
            <li>Insurance Verification & Authorization</li>
            <li>Payment Posting & Reconciliation</li>
            <li>Denial Management</li>
            <li>Credentialing & Compliance Support</li>
            <li>Patient Billing & Support</li>
          
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li>Independent Practices</li>
            <li>Medical Group Practices</li>
            <li>Hospitals</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/BookAppointment">BookAppointment</a></li>
            <li><a href="/PolicyPage">Privacy Policy</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1" />
              (845) 205-7786 
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1" />
               info@askmedicalbilling.com 
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1" />
              100 N Brand Blvd suite 522, Glendale, CA 91203, USA
            </li>
            
            <li className="mt-4">
              <img
                src={Image} 
                alt="Clutch Badge"
                className="w-28 h-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
