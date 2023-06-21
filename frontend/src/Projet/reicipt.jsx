import React from 'react'

export default function Reicipt({opt,mt,vt}) {
  return (
    <div>
        <h1>Thank you for your order!</h1>
        <ul>
            <li>
            CousCous Type : {opt}
            </li>
            <li>
            The Type Of Meat: {mt}
            </li>
            <li>
            Vegetables : {vt}
            </li>
        </ul>
        <b>Please let us know if you have any questions or concerns regarding your order.</b>
    
    Best regards,
    AloCouscous
    </div>
  )
}
