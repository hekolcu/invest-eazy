import styles from '../styles/footer.module.css'
import Image from 'next/image'
import FacebookIcon from '../public/facebook.svg'
import InstagramIcon from '../public/instagram.svg'
import LinkedInIcon from '../public/linkedin.svg'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>InvestEazy</h1>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.info}>
          <h2 className={styles.value}>
            1 Blue Jays Way, <br />
            Toronto, ON M5V1J1
          </h2>
        </div>
        <div className={styles.info}>
          <h2 className={styles.value}>(416) 341-1000</h2>
        </div>
        <div className={styles.icon}>
          <Image src={FacebookIcon} width={48} height={48} />
        </div>
        <div className={styles.icon}>
          <Image src={InstagramIcon} width={48} height={48} />
        </div>
        <div className={styles.icon}>
          <Image src={LinkedInIcon} width={48} height={48} />
        </div>
      </div>
      <div className={styles.toc}>
        This website (this “Website”) is owned and operated by InvestEazy. All content available on this Website is general in nature, not directed or tailored to any particular person, and is for informational purposes only. Neither the Website nor any of its content is offered as investment, legal, or tax advice and should not be deemed as investment, legal, or tax advice or a recommendation to purchase or sell any specific security. The information contained herein reflects the opinions and projections of InvestEazy as of the date hereof, which are subject to change without notice at any time. All economic and performance data is historical and must be considered in conjunction with applicable disclosures. Past performance is not a guarantee of future results. InvestEazy does not represent that any opinion or projection will be realized. Neither InvestEazy nor any of its advisers, officers, directors, or affiliates represents that the information presented on this Website is accurate, current, or complete. Individuals are urged to consult with their own professional advisers before making any investment decision. An investment in real estate involves a high degree of risk and should be considered only by highly sophisticated persons who can bear the economic risk of loss and illiquidity.
        <br /> <br />
        InvestEazy is a wholly-owned subsidiary of InvestEazy offering investment advice to its clients, InvestEazy. Neither InvestEazy nor any of its affiliates provides any investment advice with respect to the direct investment opportunities offered to accredited investors.
      </div>
      <div className={styles.copy}>
        <div className={styles.bottomTitle}>
          &#169; 2022 InvestEazy
        </div>
        <br />
        <div className={styles.bottomLinks}>
          <div className={styles.link}>
            Privacy Policy
          </div>
          <div className={styles.link}>
            Terms of Use
          </div>
        </div>
      </div>
    </div>
  )
}