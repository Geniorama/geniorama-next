import styles from "../styles/CardTeamGen.module.css";
import Image from "next/image";

export default function CardTeamGen({
  image,
  name,
  position,
  linkedin,
  facebook,
  instagram,
  github,
  behance,
  website,
  youtube
}) {
  return (
    <div className={styles.CardTeamGen}>
      <Image src={image} className={styles.CardTeamGen__img} width={400} height={600} objectFit="cover" objectPosition={"top"} />

      <div className={styles.CardTeamGen__info}>
        <h2 className={styles.CardTeamGen__info__name}>{name}</h2>
        <span className={styles.CardTeamGen__info__position}>{position}</span>
        <div className={styles.CardTeamGen__info__social}>
          {linkedin ? (
            <a id="gen-icon-linkedin" href={linkedin} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </span>
            </a>
          ) : null}

          {facebook ? (
            <a id="gen-icon-facebook" href={facebook} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </span>
            </a>
          ) : null}

          {instagram ? (
            <a id="gen-icon-instagram" href={instagram} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                </svg>
              </span>
            </a>
          ) : null}

          {github ? (
            <a id="gen-icon-github" href={github} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </span>
            </a>
          ) : null}

          {behance ? (
            <a id="gen-icon-behance" href={behance} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7.5 11a2 2 0 1 0 0-4H3v4h4.5zm1 2H3v4h5.5a2 2 0 1 0 0-4zm2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.572zM15.5 6H21v1.5h-5.5V6zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0v1.25zm-2.104-2a2.751 2.751 0 0 0-5.292 0h5.292z" />
                </svg>
              </span>
            </a>
          ) : null}


          {youtube ? (
            <a id="gen-icon-behance" href={youtube} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M7.5 11a2 2 0 1 0 0-4H3v4h4.5zm1 2H3v4h5.5a2 2 0 1 0 0-4zm2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.572zM15.5 6H21v1.5h-5.5V6zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0v1.25zm-2.104-2a2.751 2.751 0 0 0-5.292 0h5.292z" />
                </svg>
              </span>
            </a>
          ) : null}


          {website ? (
            <a id="gen-icon-website" href={website} target="_blank" rel="noreferrer">
              <span className={styles.CardTeamGen__info__social__contIcons}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.544 10.456C12.7249 9.63723 11.6141 9.17728 10.456 9.17728C9.29784 9.17728 8.1871 9.63723 7.36799 10.456L4.27899 13.544C3.45987 14.3631 2.99969 15.4741 2.99969 16.6325C2.99969 17.7909 3.45987 18.9019 4.27899 19.721C5.09811 20.5401 6.20908 21.0003 7.36749 21.0003C8.52591 21.0003 9.63687 20.5401 10.456 19.721L12 18.177" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.456 13.544C11.2751 14.3628 12.3858 14.8227 13.544 14.8227C14.7021 14.8227 15.8129 14.3628 16.632 13.544L19.721 10.456C20.5401 9.63688 21.0003 8.52591 21.0003 7.3675C21.0003 6.20909 20.5401 5.09812 19.721 4.279C18.9019 3.45988 17.7909 2.9997 16.6325 2.9997C15.4741 2.9997 14.3631 3.45988 13.544 4.279L12 5.823" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
