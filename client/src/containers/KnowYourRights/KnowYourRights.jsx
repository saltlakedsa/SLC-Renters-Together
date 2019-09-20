import React, { useRef, useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import StickyBox from 'react-sticky-box';

export default function KnowYourRights() {
  const scrollToRef = (scrollTo) => {
    window.scrollTo(0, scrollTo.current.offsetTop);
  };

  const lawyerRef = useRef(null);
  const requestTrialRef = useRef(null);
  const courtRef = useRef(null);
  const untilRef = useRef(null);
  const yourTrialRef = useRef(null);
  const defensesRef = useRef(null);
  const emergencyRef = useRef(null);

  return (
    <div className="know-your-rights">
      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col className="d-none d-md-block" md={3} lg={3} xl={2}>
            <StickyBox offsetTop={60} ofsetBottom={60}>
              <div className="card">
                <div className="card-body">
                  <h4>What to do:</h4>
                  <ol>
                    <li
                      onClick={() => scrollToRef(requestTrialRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Request a Hearing
                    </li>
                    <li
                      onClick={() => scrollToRef(courtRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Schedule your Hearing
                    </li>
                    <li
                      onClick={() => scrollToRef(lawyerRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Speak to a Lawyer
                    </li>
                    <li
                      onClick={() => scrollToRef(yourTrialRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Your Trial
                    </li>
                    <li
                      onClick={() => scrollToRef(defensesRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Defend yourself in court
                    </li>
                    <li
                      onClick={() => scrollToRef(untilRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Your Rights Leading up to your trial
                    </li>
                    <li
                      onClick={() => scrollToRef(emergencyRef)}
                      style={{ cursor: 'pointer' }}
                    >
                      Emergency Housing Resources
                    </li>
                  </ol>
                </div>
              </div>
            </StickyBox>
          </Col>
          <Col md={8} lg={9}>
            <div className="row mb-2">
              <div className="col-lg-12 text-center">
                <h4 className="main-text">
                  Is your landlord trying to evict you?
                </h4>
                <h2>
                  Know your rights and 
                  <span className="text-danger"> fight back</span>
!
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col mb-2" ref={requestTrialRef}>
                <h4 className="font-weight-bold">Request a Hearing</h4>
                In Utah a landlord cannot evict a tenant without a court order.
                However you, the tenant, can choose to not comply with the
                initial notice to vacate and request an occupancy hearing, in
                which you will have a chance to defend your continued occupancy.
                Although the judge may decide that your case requires a trial,
                you still have a chance to win if you show up to your court date
                with the necessary materials/witnesses.
                <br />
                <br />
                If you go to court,
                {' '}
                <span className="text-danger">you can win.</span>
                {' '}
If you don't
                go to court, you are guaranteed to lose. Landlords count on you
                to not know your rights or to stand up for yourself. Eviction is
                an industry, and it's profitable because most tenants never come
                to court to make the landlords and their lawyers work to put
                them out.
                <br />
                <br />
                Visit the
                {' '}
                <a href="https://pubapps.utcourts.gov/OcapWEB/">
                  Utah State Court OCAP System
                </a>
                {' '}
                to request a hearing in the event of an eviction.
              </div>
            </div>
            <div className="row mb-5">
              <div className="col" ref={courtRef}>
                <h4 className="font-weight-bold">
                  Go to court for your hearing
                </h4>
                Find out where court is held and if you can call to reschedule
                your court date.
              </div>
            </div>
            <div className="row mb-5">
              <div className="col" ref={lawyerRef}>
                <h4 className="font-weight-bold">Speak with a lawyer</h4>
                <div className="ml-3">
                  <div className="mb-2">
                    <span className="font-weight-bold">Don't go it alone!</span>
                    {' '}
                    Your landlord will have a lawyer. Tenants with lawyers get
                    evicted six times less frequently than those who go alone.
                    The earlier you seek legal assistance, the more likely you
                    are to get representation and better advice.
                  </div>
                  <div className="mb-2">
                    <span className="font-weight-bold">
                      Call or visit Utah Legal Services
                    </span>
                    {' '}
                    at (801) 328-8891 or
                    <a href="https://www.utahlegalservices.org/">
                      utahlegalservices.org
                    </a>
                    . Utah Legal Services is a non-profit dedicated to offering
                    low-income Utahns free legal services. You can directly
                    apply for assistance online
                    <a href="https://ulsoi.legalserver.org/modules/matter/extern_intake.php?pid=4&h=638cee">
                      here!
                    </a>
                  </div>
                  <div className="mb-2">
                    <span className="font-weight-bold">
                      Call or visit the Utah State Bar
                    </span>
                    {' '}
                    at (801) 531-9077 or
                    <a href="https://www.utahbar.org">utahbar.org </a>
                    to find an attorney who practices in your area and is
                    knowledgeable with tenant-landlord law
                  </div>
                  <span className="font-weight-bold">
                    On the day of your trial
                  </span>
                  {' '}
                  you can get legal help by going to TODO PUT INFO HERE
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col" ref={yourTrialRef}>
                <h4 className="font-weight-bold">Your Trial</h4>
                You have the right to a trial. There are legal motions you can
                file that will give you more time to defend your rights, whether
                or not you have a lawyer yet.
                <div className="mb-2">
                  <span className="font-weight-bold">
                    You can request a continuance
                  </span>
                  (so that the trial is continued at a later date) in order to
                  find a lawyer. Note that if you do this, you must ask to
                  "reserve" your jury rights.
                </div>
                <div className="mb-2">
                  <span className="font-weight-bold">
                    You can request a jury trial
                  </span>
                  . A jury will usually be more sympathetic to a tenant than to
                  a landlord, and a jury trial will buy you more time before a
                  writ of eviction is issued. It usually costs money to request
                  a jury trial, but the
                  <span className="font-weight-bold">
                    fee can be waived
                  </span>
                  {' '}
                  for low income tenants who fill out a form called an IFP. IFPs
                  are available in the clerk's office and usually only take
                  about five minutes to fill out! You qualify if you receive the
                  following benetits:
                  <ul>
                    <li>TANF</li>
                    <li>Medicaid</li>
                    <li>DC Healthcare Alliance</li>
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-weight-bold">Consent Judgment</span>
:
                  the landlord's attorney might offer you a "consent judgment".
                  These can provide additional time, but entering into them
                  means you lose the ability to raise defenses. The landlord's
                  attorney doesn't work for you or your best interest, and it is
                  always a good idea to have a lawyer review any legal agreement
                  before signing.
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col" ref={untilRef}>
                <h4 className="font-weight-bold">Until your trial</h4>
                <div>
                  Utah code §§78B-6-801 require that the landlord use only
                  lawful procedures to evict a tenant. Utah code §78B-6-814 also
                  prohibits a landlord from excluding a tenant from the premises
                  except by judicial process.
                  <h6 className="mt-3 font-weight-bold">
                    Until the landlord has a court order, they may not
                  </h6>
                  <ul>
                    <li>Change the locks on the doors</li>
                    <li>
                      Shut off any utility, such as water, electricity, or gas
                    </li>
                    <li>
                      Take possession of any property belonging to the tenant
                    </li>
                    <li>
                      Enter the rental unit without advance notice to the
                      tenant, except in the case a true emergency exists
                    </li>
                    <li>
                      Harass, intimidate, or threaten the tenant or the tenant's
                      guests
                    </li>
                    <li>
                      Inhibit the tenant's right to freely enter and leave the
                      premises
                    </li>
                  </ul>
                  The landlord cannot perform any of the above listed activities
                  {' '}
                  <span className="font-weight-bold">even if</span>
                  {' '}
you have not
                  paid rent or have violated any written rules. You have rights,
                  and the landlord must use the legal process to evict. If your
                  landlord has performed any of the above actions, discuss
                  immediately with your legal representation.
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col" ref={defensesRef}>
                <h4 className="font-weight-bold">Defenses against eviction</h4>
                There are common legal defenses against eviction. Discuss with a
                lawyer to see if any apply to your eviction trial.
                <ul>
                  <li>
                    <span className="font-weight-bold">Bad Conditions:</span>
                    {' '}
If
                    there are major housing code violations in your apartment, a
                    judge may rule that the landlord does not have the right to
                    collect rent until they are fixed.
                  </li>
                  <li>
                    <span className="font-weight-bold">Retaliation: </span>
                    {' '}
It
                    is illegal to use eviction to retaliate against tenants. If
                    you have asserted your rights as a tenant in the last 6
                    months (complaining about conditions, challenging a rent
                    hike, etc.), the judge must consider the possibility of
                    retaliation.
                  </li>
                  <li>
                    <span className="font-weight-bold">Notice: </span>
                    {' '}
If you
                    can speak with an attorney, ask what kind of notice your
                    landlord was required to give. If you didn't receive proper
                    notice, you should not be evicted.
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col" ref={emergencyRef}>
                <h4 className="font-weight-bold">
                  Emergency Housing Assistance
                </h4>
                If you have been forcibly removed or locked out of your housing
                at any time during the eviction process and require emergency
                housing assistance or resources, you can call 211 or visit
                {' '}
                <a href="https://211utah.org/">211utah.org</a>
              </div>
            </div>
          </Col>
          <Col xs={1} />
        </Row>
      </Container>
    </div>
  );
}
