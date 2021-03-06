const { tokenToNaturalUnits } = require('../src/util/token')


const novemberConfig = {
  numLevels: 3,
  levels: {
    0: {
      rules: [
        {
          id: 'ProfilePublished',
          class: 'SingleEvent',
          config: {
            eventType: 'ProfilePublished',
            reward: null,
            nextLevelCondition: false,
            visible: true,
            scope: 'user'
          }
        },
        {
          id: 'EmailAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'EmailAttestationPublished',
            reward: null,
            visible: true,
            nextLevelCondition: false,
            scope: 'user'
          }
        },
        {
          id: 'BothRules',
          class: 'MultiEvents',
          config: {
            eventTypes: ['ProfilePublished', 'EmailAttestationPublished'],
            visible: false,
            numEventsRequired: 2,
            reward: null,
            nextLevelCondition: true,
            scope: 'user',
            unlockConditionMsg: [
              {
                conditionTranslateKey: 'growth.profile.requirement',
                conditionIcon: 'images/growth/email-icon-small.svg'
              },
              {
                conditionTranslateKey: 'growth.email.requirement',
                conditionIcon: 'images/growth/email-icon-small.svg'
              }
            ]
          }
        }
      ]
    },
    1: {
      rules: [
        {
          id: 'PhoneAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'PhoneAttestationPublished',
            reward: null,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'FacebookAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user',
            unlockConditionMsg: [
              {
                conditionTranslateKey: 'growth.attestation.requirement.facebookAttestation',
                conditionIcon: 'growth.purchase.empty.details'
              }
            ]
          }
        },
        {
          id: 'AirbnbAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'AirbnbAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'TwitterAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user',
            unlockConditionMsg: [
              {
                conditionTranslateKey: 'growth.attestation.requirement.twitterAttestation',
                conditionIcon: 'growth.purchase.empty.details'
              }
            ]
          }
        },
        {
          id: 'GoogleAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'GoogleAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'GitHubAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'GitHubAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'LinkedInAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'LinkedInAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'KakaoAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'KakaoAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'WebsiteAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'WebsiteAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TelegramAttestation',
          class: 'SingleEvent',
          config: {
            eventType: 'TelegramAttestationPublished',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user',
            unlockConditionMsg: [
              {
                conditionTranslateKey: 'growth.attestation.requirement.telegram',
                conditionIcon: 'images/growth/telegram-badge.svg'
              }
            ]
          }
        },
        {
          id: 'TwitterShare16',
          class: 'SocialShare',
          config: {
            socialNetwork: 'twitter',
            eventType: 'SharedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            contentId: 'anna_wang_decentralise',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterShare17',
          class: 'SocialShare',
          config: {
            socialNetwork: 'twitter',
            eventType: 'SharedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            contentId: 'ryan_kim_hashed',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterShare18',
          class: 'SocialShare',
          config: {
            socialNetwork: 'twitter',
            eventType: 'SharedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            contentId: 'free_as_possible',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterShare19',
          class: 'SocialShare',
          config: {
            socialNetwork: 'twitter',
            eventType: 'SharedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            contentId: 'venezuelan_merchants_reshaping',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterShare20',
          class: 'SocialShare',
          config: {
            socialNetwork: 'twitter',
            eventType: 'SharedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            contentId: 'coinlist_founder',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookShare16',
          class: 'SimpleSocialShare',
          config: {
            socialNetwork: 'facebook',
            eventType: 'SharedOnFacebook',
            contentId: 'anna_wang_decentralise',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookShare17',
          class: 'SimpleSocialShare',
          config: {
            socialNetwork: 'facebook',
            eventType: 'SharedOnFacebook',
            contentId: 'ryan_kim_hashed',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookShare18',
          class: 'SimpleSocialShare',
          config: {
            socialNetwork: 'facebook',
            eventType: 'SharedOnFacebook',
            contentId: 'free_as_possible',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookShare19',
          class: 'SimpleSocialShare',
          config: {
            socialNetwork: 'facebook',
            eventType: 'SharedOnFacebook',
            contentId: 'venezuelan_merchants_reshaping',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookShare20',
          class: 'SimpleSocialShare',
          config: {
            socialNetwork: 'facebook',
            eventType: 'SharedOnFacebook',
            contentId: 'coinlist_founder',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'FacebookLike',
          class: 'SingleEvent',
          config: {
            eventType: 'LikedOnFacebook',
            reward: {
              amount: '0',
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TwitterFollow',
          class: 'SingleEvent',
          config: {
            eventType: 'FollowedOnTwitter',
            additionalLockConditions: ['TwitterAttestation'],
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'TelegramFollow',
          class: 'SingleEvent',
          config: {
            eventType: 'FollowedOnTelegram',
            additionalLockConditions: ['TelegramAttestation'],
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'ThreeAttestations',
          class: 'MultiEvents',
          config: {
            eventTypes: [
              'PhoneAttestationPublished',
              'FacebookAttestationPublished',
              'AirbnbAttestationPublished',
              'TwitterAttestationPublished',
              'GoogleAttestationPublished',
              'GitHubAttestationPublished',
              'LinkedInAttestationPublished',
              'KakaoAttestationPublished',
              'WeChatAttestationPublished',
              'WebsiteAttestationPublished',
              'TelegramAttestationPublished'
            ],
            visible: false,
            numEventsRequired: 3,
            reward: null,
            nextLevelCondition: true,
            scope: 'user',
            unlockConditionMsg: [
              {
                conditionTranslateKey: 'growth.three.attestations.requirement',
                conditionIcon: 'images/growth/attestation-icon.svg'
              }
            ]
          }
        }
      ]
    },
    2: {
      rules: [
        {
          id: 'Referral',
          class: 'Referral',
          config: {
            levelRequired: 2,
            reward: {
              amount: tokenToNaturalUnits(50),
              currency: 'OGN'
            },
            limit: -1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign'
          }
        },
        {
          id: 'MobileAccountCreated',
          class: 'SingleEvent',
          config: {
            eventType: 'MobileAccountCreated',
            reward: {
              amount: tokenToNaturalUnits(100),
              currency: 'OGN'
            },
            limit: 1,
            visible: true,
            nextLevelCondition: false,
            scope: 'campaign',
            statusScope: 'user'
          }
        },
        {
          id: 'ListingPurchase1-001-51',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-51',
            reward: {
              amount: tokenToNaturalUnits(40),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-51-icon.jpg',
            title: '????????????Dai | ?????????-????????????30???Dai! 198??????12???????????????????????????168???????????????',
            details: '????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-52',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-52',
            reward: {
              amount: tokenToNaturalUnits(80),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-52-icon.jpg',
            title: '????????????Dai | ???????????????-????????????100???Dai! 688???????????????????????????????????????',
            details: '????????????????????????????????????????????????????????????????????????????????????688????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-53',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-53',
            reward: {
              amount: tokenToNaturalUnits(5),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-53-icon.jpg',
            title: '????????????Dai | ??????????????????288??????-????????????7???Dai???',
            details: '????????????App?????????288????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-54',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-54',
            reward: {
              amount: tokenToNaturalUnits(5),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-54-icon.jpg',
            title: '????????????Dai | Hellobike??????????????????-????????????2.5???Dai???',
            details: 'Hellobike???????????? ?????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-47',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-47',
            reward: {
              amount: tokenToNaturalUnits(5),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-47-icon.jpg',
            title: '????????????Dai | Mobike????????????7??????-????????????2.5???Dai???',
            details: '????????????7???7???????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-55',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-55',
            reward: {
              amount: tokenToNaturalUnits(5),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-55-icon.jpg',
            title: '????????????Dai | ?????????????????????1079????????????-????????????6.9???Dai???',
            details: '????????????????????????????????????????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-56',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-56',
            reward: {
              amount: tokenToNaturalUnits(5),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-56-icon.jpg',
            title: '????????????Dai | ???????????????????????????1000????????????-????????????6.9???Dai???',
            details: '????????????????????????????????????????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-57',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-57',
            reward: {
              amount: tokenToNaturalUnits(35),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-57-icon.jpg',
            title: '????????????Dai | BEPAL Q????????????-????????????30???Dai???',
            details: '???????????????????????????????????? (HD Wallet) ???????????????????????????????????????????????????????????????????????????????????????????????????'
          }
        },
        {
          id: 'ListingPurchase1-001-49',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-49',
            reward: {
              amount: tokenToNaturalUnits(10),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-49-icon.jpg',
            title: '????????????Dai | ??????????????????-????????????11???Dai???',
            details: 'TEGIC ?????????????????? ??????????????? ??????????????????????????? ??????????????? ????????? ????????? ?????????'
          }
        },
        {
          id: 'ListingPurchase1-001-58',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-58',
            reward: {
              amount: tokenToNaturalUnits(30),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-58-icon.jpg',
            title: '????????????Dai | ?????????????????????????????????-????????????40???Dai???',
            details: 'TEGIC ??????????????? PD18W???????????? ?????????????????? ????????? ????????? ??????(20?????????) ??????Lightning'
          }
        },
        {
          id: 'ListingPurchase1-001-59',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-59',
            reward: {
              amount: tokenToNaturalUnits(20),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-59-icon.jpg',
            title: '????????????Dai | ???????????????TS1?????????-????????????29???Dai???',
            details: 'TEGIC ??????????????? ??????????????? ??????10W QI??????????????? ?????????????????????????????? TS1 ?????????'
          }
        },
        {
          id: 'ListingPurchase1-001-48',
          class: 'ListingIdPurchase',
          config: {
            eventType: 'ListingPurchased',
            listingId: '1-001-48',
            reward: {
              amount: tokenToNaturalUnits(15),
              currency: 'OGN'
            },
            visible: true,
            limit: 100,
            nextLevelCondition: false,
            scope: 'campaign',
            iconSrc: 'images/growth/listing-1-001-48-icon.jpg',
            title: '????????????Dai | ???????????????????????????-????????????14???Dai???',
            details: 'TEGIC PD????????? ??????????????? 45W???????????????????????????QC3.0 PD45W?????????'
          }
        }
      ]
    }
  },
  twitter_share_config: {
    minAccountAgeDays: 365,
    minAgeLastTweetDays: 365,
    minFollowersThreshold: 10,
    tierFollowersThreshold: 100,
    tierFollowersIncrement: 100,
    verifiedMultiplier: 2,
    cap: 100,
  },
  content: {
    anna_wang_decentralise: {
      titleKey: 'growth.share.content16.title',
      detailsKey: 'growth.share.content16.details',
      image: 'images/growth/share-content16.png',
      link: 'https://www.originprotocol.com/video/anna-wang-decentralized-sharing-economy',
      linkKey: 'growth.share.content16.link',
      post: {
        tweet: {
          default: `In this video, @AbsolumentAnna shares her thoughts on @OriginProtocol's mission and what a #decentralized sharing economy means to her. https://www.originprotocol.com/video/anna-wang-decentralized-sharing-economy`,
          translations: [ ]
        }
      }
    },
    ryan_kim_hashed: {
      titleKey: 'growth.share.content17.title',
      detailsKey: 'growth.share.content17.details',
      image: 'images/growth/share-content17.png',
      link: 'https://www.originprotocol.com/video/ryan-kim-hashed',
      linkKey: 'growth.share.content17.link',
      post: {
        tweet: {
          default: `Ryan Kim is a partner at @Hashed_official, the largest blockchain accelerator in Korea. In this video, Ryan shares why Hashed decided to invest in @OriginProtocol and continues to support the project today. https://www.originprotocol.com/video/ryan-kim-hashed`,
          translations: [ ]
        }
      }
    },
    free_as_possible: {
      titleKey: 'growth.share.content18.title',
      detailsKey: 'growth.share.content18.details',
      image: 'images/growth/share-content18.png',
      link: 'https://www.originprotocol.com/video/yusuke-obinata-nodetokyo',
      linkKey: 'growth.share.content18.link',
      post: {
        tweet: {
          default: `Watch @obnty, Founder of NodeTokyo sharing how @OriginProtocol maximizes freedom and allows people to buy and sell without any restrictions. https://www.originprotocol.com/video/yusuke-obinata-nodetokyo`,
          translations: [ ]
        }
      }
    },
    venezuelan_merchants_reshaping: {
      titleKey: 'growth.share.content19.title',
      detailsKey: 'growth.share.content19.details',
      image: 'images/growth/share-content19.png',
      link: 'https://medium.com/originprotocol/these-venezuelan-merchants-are-reshaping-commerce-with-origin-c28e6d2169d9',
      linkKey: 'growth.share.content19.link',
      post: {
        tweet: {
          default: `Decentralized commerce can empower local communities to buy and sell freely in the emerging world. Here is a recap of @OriginProtocol's recent meetup in Venezuela. https://medium.com/originprotocol/these-venezuelan-merchants-are-reshaping-commerce-with-origin-c28e6d2169d9`,
          translations: [ ]
        }
      }
    },
    coinlist_founder: {
      titleKey: 'growth.share.content20.title',
      detailsKey: 'growth.share.content20.details',
      image: 'images/growth/share-content20.png',
      link: 'https://www.originprotocol.com/video/coinlist-founder-decentralized-marketplace-future',
      linkKey: 'growth.share.content20.link',
      post: {
        tweet: {
          default: `In this video, @Andy_Bromberg, Founder and President of @CoinList discusses some of the incredible new possibilities enabled by @OriginProtocol and peer-to-peer marketplaces. https://www.originprotocol.com/video/coinlist-founder-decentralized-marketplace-future`,
          translations: [ ]
        }
      }
    },
  }
}

module.exports = novemberConfig
