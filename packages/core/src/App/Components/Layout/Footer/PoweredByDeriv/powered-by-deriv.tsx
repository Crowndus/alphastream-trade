import React from 'react';

/**
 * Required by Deriv's white-label branding guidelines (see build plan Phase 8).
 * Deriv requires "Powered by Deriv" to be displayed above/before the Deriv
 * logo, plus a disclaimer that this is an independent marketing partner.
 *
 * Drop <PoweredByDeriv /> into the app's global footer (rendered on every
 * page) — e.g. alongside packages/core/src/App/Components/Layout/Footer.
 */
const PoweredByDeriv = () => (
    <div className='powered-by-deriv'>
        <p className='powered-by-deriv__badge'>Powered by Deriv — Regulated since 1999</p>
        <p className='powered-by-deriv__disclaimer'>
            Alphastream is an independent marketing partner of Deriv. All trading accounts are opened and managed
            through Deriv&apos;s regulated platform.
        </p>
    </div>
);

export default PoweredByDeriv;
