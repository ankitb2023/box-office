import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;

  h1 {
    color: ${({ theme }) => theme.mainColors.white};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
    font-size: 50px;
    animation: glow 1s ease-in-out infinite alternate;
  }

  p {
    color: ${({ theme }) => theme.mainColors.grey};
    margin: 0;
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 8px #99e6ff, 0 0 16px #99e6ff, 0 0 22px #2400ff,
        0 0 25px #2400ff, 0 0 30px #2400ff, 0 0 37px #2400ff, 0 0 45px #99e6ff;
    }

    to {
      text-shadow: 0 0 16px #99e6ff, 0 0 22px  #2400ff, 0 0 25px  #2400ff,
        0 0 30px  #2400ff, 0 0 37px  #2400ff, 0 0 45px  #2400ff, 0 0 50px  #2400ff;
    }
  }
`;
