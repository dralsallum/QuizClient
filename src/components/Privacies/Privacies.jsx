// privacy.jsx
import React from "react";
import {
  TermsContainer,
  TermsHeader,
  TermsContent,
} from "./Privacies.elements";

// Subcomponents for Privacy Policy Sections
const PrivacySection = ({ title, children }) => (
  <section style={{ marginBottom: "1em" }}>
    <h3>{title}</h3>
    {children}
  </section>
);

const PrivacyPolicy = () => {
  return (
    <div style={{ marginTop: "1em" }}>
      <h2>Privacy Policy of Timelines Time Tracking</h2>
      <p>This Application collects some Personal Data from its Users.</p>
      <p>
        This document can be printed for reference by using the print command in
        the settings of any browser.
      </p>

      <PrivacySection title="Policy summary">
        <p>
          Personal Data processed for the following purposes and using the
          following services:
        </p>
        <ul>
          <li>
            <strong>Analytics</strong>
            <ul>
              <li>
                <strong>Fabric Answers</strong>
                <br />
                Personal Data: Cookies; unique device identifiers for
                advertising (Google Advertiser ID or IDFA, for example); Usage
                Data
              </li>
              <li>
                <strong>Flurry Analytics</strong>
                <br />
                Personal Data: Cookies; Usage Data; various types of Data as
                specified in the privacy policy of the service
              </li>
              <li>
                <strong>Amplitude Analytics</strong>
                <br />
                Personal Data: Cookies; Usage Data
              </li>
            </ul>
          </li>
          <li>
            <strong>Contacting the User</strong>
            <ul>
              <li>
                <strong>Mailing list or newsletter and Contact form</strong>
                <br />
                Personal Data: email address
              </li>
            </ul>
          </li>
          <li>
            <strong>Infrastructure monitoring</strong>
            <ul>
              <li>
                <strong>Crashlytics</strong>
                <br />
                Personal Data: geographic position; unique device identifiers
                for advertising (Google Advertiser ID or IDFA, for example);
                various types of Data as specified in the privacy policy of the
                service
              </li>
            </ul>
          </li>
          <li>
            <strong>Managing contacts and sending messages</strong>
            <ul>
              <li>
                <strong>Mailchimp</strong>
                <br />
                Personal Data: email address
              </li>
            </ul>
          </li>
        </ul>
      </PrivacySection>

      <PrivacySection title="Contact information">
        <p>
          <strong>Owner and Data Controller</strong>
          <br />
          Lukáš Petr
          <br />
          Ovci Hajek 2169, Praha 5
          <br />
          15800, Czech Republic
          <br />
          Owner contact email:{" "}
          <a href="mailto:lukas@timelinesapp.io">lukas@timelinesapp.io</a>
        </p>
      </PrivacySection>

      <PrivacySection title="Full policy">
        <PrivacySection title="Owner and Data Controller">
          <p>
            Lukáš Petr
            <br />
            Ovci Hajek 2169, Praha 5
            <br />
            15800, Czech Republic
            <br />
            Owner contact email:{" "}
            <a href="mailto:lukas@timelinesapp.io">lukas@timelinesapp.io</a>
          </p>
        </PrivacySection>

        <PrivacySection title="Types of Data collected">
          <p>
            Among the types of Personal Data that this Application collects, by
            itself or through third parties, there are: Cookies; Usage Data;
            unique device identifiers for advertising (Google Advertiser ID or
            IDFA, for example); email address; geographic position.
          </p>
          <p>
            Complete details on each type of Personal Data collected are
            provided in the dedicated sections of this privacy policy or by
            specific explanation texts displayed prior to the Data collection.
          </p>
          <p>
            Personal Data may be freely provided by the User, or, in case of
            Usage Data, collected automatically when using this Application.
            Unless specified otherwise, all Data requested by this Application
            is mandatory and failure to provide this Data may make it impossible
            for this Application to provide its services. In cases where this
            Application specifically states that some Data is not mandatory,
            Users are free not to communicate this Data without consequences to
            the availability or the functioning of the Service. Users who are
            uncertain about which Personal Data is mandatory are welcome to
            contact the Owner.
          </p>
          <p>
            Any use of Cookies – or of other tracking tools — by this
            Application or by the owners of third-party services used by this
            Application serves the purpose of providing the Service required by
            the User, in addition to any other purposes described in the present
            document.
          </p>
          <p>
            Users are responsible for any third-party Personal Data obtained,
            published or shared through this Application.
          </p>
        </PrivacySection>

        <PrivacySection title="Mode and place of processing the Data">
          <PrivacySection title="Methods of processing">
            <p>
              The Owner takes appropriate security measures to prevent
              unauthorized access, disclosure, modification, or unauthorized
              destruction of the Data.
            </p>
            <p>
              The Data processing is carried out using computers and/or IT
              enabled tools, following organizational procedures and modes
              strictly related to the purposes indicated. In addition to the
              Owner, in some cases, the Data may be accessible to certain types
              of persons in charge, involved with the operation of this
              Application (administration, sales, marketing, legal, system
              administration) or external parties (such as third-party technical
              service providers, mail carriers, hosting providers, IT companies,
              communications agencies) appointed, if necessary, as Data
              Processors by the Owner. The updated list of these parties may be
              requested from the Owner at any time.
            </p>
          </PrivacySection>

          <PrivacySection title="Place">
            <p>
              The Data is processed at the Owner's operating offices and in any
              other places where the parties involved in the processing are
              located.
            </p>
            <p>
              Depending on the User's location, data transfers may involve
              transferring the User's Data to a country other than their own. To
              find out more about the place of processing of such transferred
              Data, Users can check the section containing details about the
              processing of Personal Data.
            </p>
          </PrivacySection>

          <PrivacySection title="Retention time">
            <p>
              Unless specified otherwise in this document, Personal Data shall
              be processed and stored for as long as required by the purpose
              they have been collected for and may be retained for longer due to
              applicable legal obligation or based on the Users’ consent.
            </p>
          </PrivacySection>
        </PrivacySection>

        <PrivacySection title="The purposes of processing">
          <p>
            The Data concerning the User is collected to allow the Owner to
            provide its Service, comply with its legal obligations, respond to
            enforcement requests, protect its rights and interests (or those of
            its Users or third parties), detect any malicious or fraudulent
            activity, as well as the following: Analytics, Managing contacts and
            sending messages, Contacting the User and Infrastructure monitoring.
          </p>
          <p>
            For specific information about the Personal Data used for each
            purpose, the User may refer to the section “Detailed information on
            the processing of Personal Data”.
          </p>
        </PrivacySection>

        <PrivacySection title="Detailed information on the processing of Personal Data">
          <PrivacySection title="Analytics">
            <p>
              The services contained in this section enable the Owner to monitor
              and analyze web traffic and can be used to keep track of User
              behavior.
            </p>

            <PrivacySection title="Fabric Answers (Google LLC)">
              <p>
                Fabric Answers is an analytics service provided by Crashlytics,
                a business division of Google LLC. In order to understand
                Google's use of Data, consult Google's partner policy. This
                service is designed for mobile apps analytics and can collect
                various information about your phone, highlighted in the Fabric
                Answers privacy policy. In particular, this Application uses
                identifiers for mobile devices (including Android Advertising ID
                or Advertising Identifier for iOS, respectively) and
                technologies similar to cookies to run the Fabric Answers
                service. Fabric Answers may share Data with other tools provided
                by Fabric/Crashlytics, such as Crashlytics or Twitter. The User
                may check this privacy policy to find a detailed explanation
                about the other tools used by the Owner. Users may opt-out of
                certain Fabric Answers features through applicable device
                settings, such as the device advertising settings for mobile
                phones or by following the instructions in other Fabric related
                sections of this privacy policy, if available.
              </p>
              <p>
                <strong>Personal Data processed:</strong> Cookies; unique device
                identifiers for advertising (Google Advertiser ID or IDFA, for
                example); Usage Data.
              </p>
              <p>
                <strong>Place of processing:</strong> United States –{" "}
                <a href="https://policies.google.com/privacy">Privacy Policy</a>
                .
              </p>
            </PrivacySection>

            <PrivacySection title="Flurry Analytics (Flurry, Inc.)">
              <p>
                Flurry Analytics is an analytics service provided by Yahoo! Inc.
                This service is designed for mobile apps analytics and can
                collect various information about your phone, highlighted in the
                Flurry Analytics privacy policy. If the User chooses to opt-out,
                Flurry will stop tracking data for the device identified by the
                provided MAC address and/or device identifier going forward. The
                analytics service tracking will stop across all applications
                within the Flurry network.
              </p>
              <p>
                <strong>Personal Data processed:</strong> Cookies; Usage Data;
                various types of Data as specified in the privacy policy of the
                service.
              </p>
              <p>
                <strong>Place of processing:</strong> United States –{" "}
                <a href="https://policies.yahoo.com/us/en/yahoo/privacy/index.htm">
                  Privacy Policy
                </a>{" "}
                –{" "}
                <a href="https://developer.yahoo.com/flurry/end-user-opt-out/">
                  Opt Out
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection title="Amplitude Analytics (Amplitude Inc.)">
              <p>
                Amplitude Analytics is an analytics service provided by
                Amplitude Inc.
              </p>
              <p>
                <strong>Personal Data processed:</strong> Cookies; Usage Data.
              </p>
              <p>
                <strong>Place of processing:</strong> United States –{" "}
                <a href="https://amplitude.com/privacy">Privacy Policy</a>.
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Contacting the User">
            <PrivacySection title="Mailing list or newsletter (this Application)">
              <p>
                By registering on the mailing list or for the newsletter, the
                User’s email address will be added to the contact list of those
                who may receive email messages containing information of
                commercial or promotional nature concerning this Application.
                Your email address might also be added to this list as a result
                of signing up to this Application or after making a purchase.
              </p>
              <p>
                <strong>Personal Data processed:</strong> email address.
              </p>
            </PrivacySection>

            <PrivacySection title="Contact form (this Application)">
              <p>
                By filling in the contact form with their Data, the User
                authorizes this Application to use these details to reply to
                requests for information, quotes or any other kind of request as
                indicated by the form’s header.
              </p>
              <p>
                <strong>Personal Data processed:</strong> email address.
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Infrastructure monitoring">
            <PrivacySection title="Crashlytics (Google LLC)">
              <p>Crashlytics is a monitoring service provided by Google LLC.</p>
              <p>
                <strong>Personal Data processed:</strong> geographic position;
                unique device identifiers for advertising (Google Advertiser ID
                or IDFA, for example); various types of Data as specified in the
                privacy policy of the service.
              </p>
              <p>
                <strong>Place of processing:</strong> United States –{" "}
                <a href="https://firebase.google.com/support/privacy">
                  Privacy Policy
                </a>
                .
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Managing contacts and sending messages">
            <PrivacySection title="Mailchimp (The Rocket Science Group, LLC.)">
              <p>
                Mailchimp is an email address management and message sending
                service provided by The Rocket Science Group, LLC.
              </p>
              <p>
                <strong>Personal Data processed:</strong> email address.
              </p>
              <p>
                <strong>Place of processing:</strong> United States –{" "}
                <a href="https://mailchimp.com/legal/privacy/">
                  Privacy Policy
                </a>
                .
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Further Information for Users">
            <PrivacySection title="Legal basis of processing">
              <p>
                The Owner may process Personal Data relating to Users if one of
                the following applies:
              </p>
              <ol>
                <li>
                  Users have given their consent for one or more specific
                  purposes.
                </li>
                <li>
                  Provision of Data is necessary for the performance of an
                  agreement with the User and/or for any pre-contractual
                  obligations thereof.
                </li>
                <li>
                  Processing is necessary for compliance with a legal obligation
                  to which the Owner is subject.
                </li>
                <li>
                  Processing is related to a task that is carried out in the
                  public interest or in the exercise of official authority
                  vested in the Owner.
                </li>
                <li>
                  Processing is necessary for the purposes of the legitimate
                  interests pursued by the Owner or by a third party.
                </li>
              </ol>
              <p>
                In any case, the Owner will gladly help to clarify the specific
                legal basis that applies to the processing, and in particular
                whether the provision of Personal Data is a statutory or
                contractual requirement, or a requirement necessary to enter
                into a contract.
              </p>
            </PrivacySection>

            <PrivacySection title="Further information about retention time">
              <p>
                Unless specified otherwise in this document, Personal Data shall
                be processed and stored for as long as required by the purpose
                they have been collected for and may be retained for longer due
                to applicable legal obligation or based on the Users’ consent.
              </p>
              <p>Therefore:</p>
              <ol>
                <li>
                  Personal Data collected for purposes related to the
                  performance of a contract between the Owner and the User shall
                  be retained until such contract has been fully performed.
                </li>
                <li>
                  Personal Data collected for the purposes of the Owner’s
                  legitimate interests shall be retained as long as needed to
                  fulfill such purposes. Users may find specific information
                  regarding the legitimate interests pursued by the Owner within
                  the relevant sections of this document or by contacting the
                  Owner.
                </li>
              </ol>
              <p>
                The Owner may be allowed to retain Personal Data for a longer
                period whenever the User has given consent to such processing,
                as long as such consent is not withdrawn. Furthermore, the Owner
                may be obliged to retain Personal Data for a longer period
                whenever required to fulfil a legal obligation or upon order of
                an authority.
              </p>
              <p>
                Once the retention period expires, Personal Data shall be
                deleted. Therefore, the right of access, the right to erasure,
                the right to rectification and the right to data portability
                cannot be enforced after expiration of the retention period.
              </p>
            </PrivacySection>

            <PrivacySection title="The rights of Users based on the General Data Protection Regulation (GDPR)">
              <p>
                Users may exercise certain rights regarding their Data processed
                by the Owner.
              </p>
              <p>
                In particular, Users have the right to do the following, to the
                extent permitted by law:
              </p>
              <ul>
                <li>
                  <strong>Withdraw their consent at any time:</strong> Users
                  have the right to withdraw consent where they have previously
                  given their consent to the processing of their Personal Data.
                </li>
                <li>
                  <strong>Object to processing of their Data:</strong> Users
                  have the right to object to the processing of their Data if
                  the processing is carried out on a legal basis other than
                  consent.
                </li>
                <li>
                  <strong>Access their Data:</strong> Users have the right to
                  learn if Data is being processed by the Owner, obtain
                  disclosure regarding certain aspects of the processing and
                  obtain a copy of the Data undergoing processing.
                </li>
                <li>
                  <strong>Verify and seek rectification:</strong> Users have the
                  right to verify the accuracy of their Data and ask for it to
                  be updated or corrected.
                </li>
                <li>
                  <strong>Restrict the processing of their Data:</strong> Users
                  have the right to restrict the processing of their Data. In
                  this case, the Owner will not process their Data for any
                  purpose other than storing it.
                </li>
                <li>
                  <strong>
                    Have their Personal Data deleted or otherwise removed:
                  </strong>{" "}
                  Users have the right to obtain the erasure of their Data from
                  the Owner.
                </li>
                <li>
                  <strong>
                    Receive their Data and have it transferred to another
                    controller:
                  </strong>{" "}
                  Users have the right to receive their Data in a structured,
                  commonly used and machine readable format and, if technically
                  feasible, to have it transmitted to another controller without
                  any hindrance.
                </li>
                <li>
                  <strong>Lodge a complaint:</strong> Users have the right to
                  bring a claim before their competent data protection
                  authority.
                </li>
              </ul>
              <p>
                Users are also entitled to learn about the legal basis for Data
                transfers abroad including to any international organization
                governed by public international law or set up by two or more
                countries, such as the UN, and about the security measures taken
                by the Owner to safeguard their Data.
              </p>
            </PrivacySection>

            <PrivacySection title="Details about the right to object to processing">
              <p>
                Where Personal Data is processed for a public interest, in the
                exercise of an official authority vested in the Owner or for the
                purposes of the legitimate interests pursued by the Owner, Users
                may object to such processing by providing a ground related to
                their particular situation to justify the objection.
              </p>
              <p>
                Users must know that, however, should their Personal Data be
                processed for direct marketing purposes, they can object to that
                processing at any time, free of charge and without providing any
                justification. Where the User objects to processing for direct
                marketing purposes, the Personal Data will no longer be
                processed for such purposes. To learn whether the Owner is
                processing Personal Data for direct marketing purposes, Users
                may refer to the relevant sections of this document.
              </p>
            </PrivacySection>

            <PrivacySection title="How to exercise these rights">
              <p>
                Any requests to exercise User rights can be directed to the
                Owner through the contact details provided in this document.
                Such requests are free of charge and will be answered by the
                Owner as early as possible and always within one month,
                providing Users with the information required by law. Any
                rectification or erasure of Personal Data or restriction of
                processing will be communicated by the Owner to each recipient,
                if any, to whom the Personal Data has been disclosed unless this
                proves impossible or involves disproportionate effort. At the
                Users’ request, the Owner will inform them about those
                recipients.
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Additional information about Data collection and processing">
            <PrivacySection title="Legal action">
              <p>
                The User's Personal Data may be used for legal purposes by the
                Owner in Court or in the stages leading to possible legal action
                arising from improper use of this Application or the related
                Services. The User declares to be aware that the Owner may be
                required to reveal personal data upon request of public
                authorities.
              </p>
            </PrivacySection>

            <PrivacySection title="Additional information about User's Personal Data">
              <p>
                In addition to the information contained in this privacy policy,
                this Application may provide the User with additional and
                contextual information concerning particular Services or the
                collection and processing of Personal Data upon request.
              </p>
            </PrivacySection>

            <PrivacySection title="System logs and maintenance">
              <p>
                For operation and maintenance purposes, this Application and any
                third-party services may collect files that record interaction
                with this Application (System logs) or use other Personal Data
                (such as the IP Address) for this purpose.
              </p>
            </PrivacySection>

            <PrivacySection title="Information not contained in this policy">
              <p>
                More details concerning the collection or processing of Personal
                Data may be requested from the Owner at any time. Please see the
                contact information at the beginning of this document.
              </p>
            </PrivacySection>

            <PrivacySection title="Changes to this privacy policy">
              <p>
                The Owner reserves the right to make changes to this privacy
                policy at any time by notifying its Users on this page and
                possibly within this Application and/or - as far as technically
                and legally feasible - sending a notice to Users via any contact
                information available to the Owner. It is strongly recommended
                to check this page often, referring to the date of the last
                modification listed at the bottom.
              </p>
              <p>
                Should the changes affect processing activities performed on the
                basis of the User’s consent, the Owner shall collect new consent
                from the User, where required.
              </p>
            </PrivacySection>
          </PrivacySection>

          <PrivacySection title="Definitions and legal references">
            <PrivacySection title="Personal Data (or Data)">
              <p>
                Any information that directly, indirectly, or in connection with
                other information — including a personal identification number —
                allows for the identification or identifiability of a natural
                person.
              </p>
            </PrivacySection>

            <PrivacySection title="Usage Data">
              <p>
                Information collected automatically through this Application (or
                third-party services employed in this Application), which can
                include: the IP addresses or domain names of the computers
                utilized by the Users who use this Application, the URI
                addresses (Uniform Resource Identifier), the time of the
                request, the method utilized to submit the request to the
                server, the size of the file received in response, the numerical
                code indicating the status of the server's answer (successful
                outcome, error, etc.), the country of origin, the features of
                the browser and the operating system utilized by the User, the
                various time details per visit (e.g., the time spent on each
                page within the Application) and the details about the path
                followed within the Application with special reference to the
                sequence of pages visited, and other parameters about the device
                operating system and/or the User's IT environment.
              </p>
            </PrivacySection>

            <PrivacySection title="User">
              <p>
                The individual using this Application who, unless otherwise
                specified, coincides with the Data Subject.
              </p>
            </PrivacySection>

            <PrivacySection title="Data Subject">
              <p>The natural person to whom the Personal Data refers.</p>
            </PrivacySection>

            <PrivacySection title="Data Processor (or Processor)">
              <p>
                The natural or legal person, public authority, agency or other
                body which processes Personal Data on behalf of the Controller,
                as described in this privacy policy.
              </p>
            </PrivacySection>

            <PrivacySection title="Data Controller (or Owner)">
              <p>
                The natural or legal person, public authority, agency or other
                body which, alone or jointly with others, determines the
                purposes and means of the processing of Personal Data, including
                the security measures concerning the operation and use of this
                Application. The Data Controller, unless otherwise specified, is
                the Owner of this Application.
              </p>
            </PrivacySection>

            <PrivacySection title="This Application">
              <p>
                The means by which the Personal Data of the User is collected
                and processed.
              </p>
            </PrivacySection>

            <PrivacySection title="Service">
              <p>
                The service provided by this Application as described in the
                relative terms (if available) and on this site/application.
              </p>
            </PrivacySection>

            <PrivacySection title="European Union (or EU)">
              <p>
                Unless otherwise specified, all references made within this
                document to the European Union include all current member states
                to the European Union and the European Economic Area.
              </p>
            </PrivacySection>

            <PrivacySection title="Cookie">
              <p>
                Cookies are Trackers consisting of small sets of data stored in
                the User's browser.
              </p>
            </PrivacySection>

            <PrivacySection title="Tracker">
              <p>
                Tracker indicates any technology - e.g., Cookies, unique
                identifiers, web beacons, embedded scripts, e-tags and
                fingerprinting - that enables the tracking of Users, for example
                by accessing or storing information on the User’s device.
              </p>
            </PrivacySection>

            <PrivacySection title="Legal information">
              <p>
                This privacy policy relates solely to this Application, if not
                stated otherwise within this document.
              </p>
            </PrivacySection>
          </PrivacySection>
        </PrivacySection>
      </PrivacySection>
    </div>
  );
};

const Privacies = () => {
  return (
    <TermsContainer>
      <TermsHeader>Privacy Policy</TermsHeader>
      <TermsContent>
        <PrivacyPolicy />
      </TermsContent>
    </TermsContainer>
  );
};

export default Privacies;
