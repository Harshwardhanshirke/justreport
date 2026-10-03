/* =========================================
   JUSTREPORT
   Main JavaScript
   ========================================= */


/* =========================================
   INCIDENT GUIDES
   ========================================= */

const incidents = {


    /* =====================================
       01. SEXUAL OR ABUSIVE COMMENT
       ===================================== */

    "Sexual or abusive comment": {

        title: "Sexual or abusive comment",

        description:
            "Someone has posted a sexual, abusive, insulting, or unwanted comment about you online.",

        actions: [

            {
                title: "Do not feel pressured to respond",

                text:
                    "You do not have to reply to a comment that makes you uncomfortable or unsafe."
            },

            {
                title: "Consider reporting the comment",

                text:
                    "Most social media platforms provide tools to report comments or accounts that violate their rules."
            },

            {
                title: "Keep relevant information",

                text:
                    "If you may want to report the incident later, keep the relevant information available on your device."
            }

        ]
    },



    /* =====================================
       02. HARASSING MESSAGES
       ===================================== */

    "Harassing messages": {

        title: "Harassing messages",

        description:
            "Someone is repeatedly sending you unwanted, abusive, disturbing, or inappropriate messages online.",

        actions: [

            {
                title: "You do not have to reply",

                text:
                    "If the messages make you uncomfortable, you do not need to continue the conversation."
            },

            {
                title: "Use the platform's safety tools",

                text:
                    "Depending on the platform, you may be able to block, restrict, mute, or report the account."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep information that may help you describe what happened if you decide to report the incident."
            }

        ]
    },



    /* =====================================
       03. THREATS
       ===================================== */

    "Threats": {

        title: "Threats",

        description:
            "Someone has threatened you, your safety, your property, or someone close to you through an online platform.",

        actions: [

            {
                title: "Take your safety seriously",

                text:
                    "If you feel that you may be in immediate danger, consider contacting local emergency services or someone you trust."
            },

            {
                title: "Avoid unnecessary contact",

                text:
                    "You do not have to continue communicating with someone who is threatening you."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep the relevant messages, account details, links, or other information available if you decide to report the incident."
            }

        ]
    },



    /* =====================================
       04. BLACKMAIL
       ===================================== */

    "Blackmail": {

        title: "Blackmail",

        description:
            "Someone is using threats, pressure, or private information to force you to do something.",

        actions: [

            {
                title: "Do not give in to pressure",

                text:
                    "Try not to make decisions because someone is threatening or pressuring you."
            },

            {
                title: "Do not continue unnecessary communication",

                text:
                    "If communication is making the situation worse or making you feel unsafe, you do not have to continue it."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep messages, account details, links, and other relevant information available if you decide to report the incident."
            }

        ]
    },



    /* =====================================
       05. ONLINE STALKING
       ===================================== */

    "Online stalking": {

        title: "Online stalking",

        description:
            "Someone is repeatedly following, monitoring, contacting, or attempting to track you through online platforms.",

        actions: [

            {
                title: "Review your privacy settings",

                text:
                    "Check the privacy and security settings of your social media and other online accounts."
            },

            {
                title: "Limit unwanted contact",

                text:
                    "Depending on the platform, you may be able to block, restrict, or report the account."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep relevant account names, messages, links, or other information that may help explain what happened."
            }

        ]
    },



    /* =====================================
       06. FAKE ACCOUNT
       ===================================== */

    "Fake account": {

        title: "Fake account",

        description:
            "Someone has created an account that appears to be pretending to be you or using your identity.",

        actions: [

            {
                title: "Check what the account is doing",

                text:
                    "Look at what information, images, or messages the account is using or sharing."
            },

            {
                title: "Report the account",

                text:
                    "You can report the account directly to the social-media platform. The Government of India's National Cyber Crime Reporting Portal also provides links for reporting abuse to major social-media platforms."
            },

            {
                title: "Keep the account information",

                text:
                    "Keep the account name and relevant link available if you decide to report the incident."
            }

        ],

        officialLink: {

            text: "Report social media abuse",

            url:
                "https://cybercrime.gov.in/Webform/report_abuse_social_media.aspx"

        }

    },



    /* =====================================
       07. PRIVATE PHOTOS OR VIDEOS SHARED
       ===================================== */

    "Private photos or videos shared": {

        title: "Private photos or videos shared",

        description:
            "A private photo or video involving you has been shared online without your permission.",

        actions: [

            {
                title: "Do not blame yourself",

                text:
                    "Someone sharing private content without your permission is not your fault."
            },

            {
                title: "Use the platform's reporting tools",

                text:
                    "The platform may provide tools to report the content or account."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep the information you may need to describe the incident if you decide to make a report."
            }

        ]
    },



    /* =====================================
       08. THREAT TO SHARE PRIVATE PHOTOS
       ===================================== */

    "Threat to share private photos or videos": {

        title: "Threat to share private photos or videos",

        description:
            "Someone is threatening to share private photos or videos involving you.",

        actions: [

            {
                title: "Do not let the threat pressure you",

                text:
                    "Try not to make decisions because someone is threatening to share private content."
            },

            {
                title: "Avoid unnecessary communication",

                text:
                    "You do not have to continue communicating with someone who is using threats or pressure."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep relevant messages, account information, and other details available if you decide to report the incident."
            }

        ]
    },



    /* =====================================
       09. ACCOUNT HACKED
       ===================================== */

    "Account hacked": {

        title: "Account hacked",

        description:
            "You believe someone has gained access to your online account without your permission.",

        actions: [

            {
                title: "Try to secure your account",

                text:
                    "If you still have access, review your account security settings and change your password."
            },

            {
                title: "Check for unfamiliar activity",

                text:
                    "Look for unfamiliar devices, login activity, messages, or changes to your account settings."
            },

            {
                title: "Use the platform's recovery process",

                text:
                    "If you cannot access the account, use the official account recovery process provided by the platform."
            }

        ]
    },



    /* =====================================
       10. PERSONAL INFORMATION SHARED
       ===================================== */

    "Personal information shared online": {

        title: "Personal information shared online",

        description:
            "Your personal information has been shared online without your permission or in a way that concerns you.",

        actions: [

            {
                title: "Check what was shared",

                text:
                    "Identify what information has been made public and where it appears."
            },

            {
                title: "Review your account privacy",

                text:
                    "Consider reviewing the privacy and security settings of your online accounts."
            },

            {
                title: "Report the content where appropriate",

                text:
                    "Depending on the platform, you may be able to report the content or account."
            }

        ]
    },



    /* =====================================
       11. ONLINE FINANCIAL FRAUD
       ===================================== */

    "Online financial fraud": {

        title: "Online financial fraud",

        description:
            "You believe you have been affected by an online financial fraud or an unauthorized online transaction.",

        actions: [

            {
                title: "Act quickly",

                text:
                    "If money has been lost through suspected cyber financial fraud, consider contacting the relevant bank or financial service as soon as possible."
            },

            {
                title: "Keep transaction information",

                text:
                    "Keep relevant transaction details and other information that may be requested when reporting the incident."
            },

            {
                title: "Use the official cybercrime reporting route",

                text:
                    "The National Cyber Crime Reporting Portal provides a dedicated route for financial fraud complaints."
            }

        ]
    },



    /* =====================================
       12. SOMETHING ELSE
       ===================================== */

    "Something else": {

        title: "Something else",

        description:
            "Your situation does not fit neatly into the categories above.",

        actions: [

            {
                title: "Take a moment to understand what happened",

                text:
                    "Identify what happened, which platform or service was involved, and why the situation concerns you."
            },

            {
                title: "Keep relevant information",

                text:
                    "Keep information that may help you explain what happened if you decide to report it."
            },

            {
                title: "Check the official reporting options",

                text:
                    "The National Cyber Crime Reporting Portal provides reporting options for different types of cybercrime."
            }

        ]
    }

};



/* =========================================
   HOMEPAGE → GUIDE PAGE
   ========================================= */

const incidentCards =
    document.querySelectorAll(".incident-card");


incidentCards.forEach((card) => {

    card.addEventListener("click", () => {

        const incident =
            card.getAttribute("data-incident");


        const url =
            "guide.html?incident=" +
            encodeURIComponent(incident);


        window.location.href = url;

    });

});



/* =========================================
   GUIDE PAGE
   ========================================= */

const urlParams =
    new URLSearchParams(window.location.search);


const incidentName =
    urlParams.get("incident");



/* =========================================
   GUIDE PAGE ELEMENTS
   ========================================= */

const titleElement =
    document.getElementById("incident-title");


const descriptionElement =
    document.getElementById("incident-description");


const actionsContainer =
    document.getElementById("actions-container");



/* =========================================
   LOAD SELECTED GUIDE
   ========================================= */

if (
    titleElement &&
    descriptionElement &&
    actionsContainer
) {

    /*
     * Load the selected incident.
     *
     * If an invalid incident is provided,
     * use "Something else".
     */

    const incident =
        incidents[incidentName] ||
        incidents["Something else"];



    /* Update browser title */

    document.title =
        "JustReport — " +
        incident.title;



    /* Update incident heading */

    titleElement.textContent =
        incident.title;



    /* Update incident description */

    descriptionElement.textContent =
        incident.description;



    /* Remove existing content */

    actionsContainer.innerHTML = "";



    /* =====================================
       CREATE INCIDENT ACTION CARDS
       ===================================== */

    incident.actions.forEach((action, index) => {

        const card =
            document.createElement("article");


        card.className =
            "guide-card";



        /* Number */

        const number =
            document.createElement("span");


        number.className =
            "guide-number";


        number.textContent =
            String(index + 1).padStart(2, "0");



        /* Content container */

        const content =
            document.createElement("div");



        /* Heading */

        const heading =
            document.createElement("h3");


        heading.textContent =
            action.title;



        /* Description */

        const paragraph =
            document.createElement("p");


        paragraph.textContent =
            action.text;



        /* Add content */

        content.appendChild(heading);

        content.appendChild(paragraph);

        card.appendChild(number);

        card.appendChild(content);

        actionsContainer.appendChild(card);

    });



    /* =====================================
       OFFICIAL INCIDENT-SPECIFIC LINK
       ===================================== */

    if (incident.officialLink) {

        const linkWrapper =
            document.createElement("div");


        linkWrapper.className =
            "incident-official-link";


        const link =
            document.createElement("a");


        link.href =
            incident.officialLink.url;


        link.target =
            "_blank";


        link.rel =
            "noopener noreferrer";


        link.className =
            "official-button";


        link.innerHTML =
            incident.officialLink.text +
            ' <span>↗</span>';


        linkWrapper.appendChild(link);


        actionsContainer.appendChild(linkWrapper);

    }

}