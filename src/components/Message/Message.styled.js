import styled from 'styled-components';

export const CardWrap = styled.div`
  filter: drop-shadow(-1px 4px 2px rgba(50, 50, 0, 0.4));
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 32px 24px 14px;
  width: 268px;
  min-height: 242px;
  backdrop-filter: blur(8px);
  background-color: ${p => p.theme.colors.messageBackground};
  clip-path: path(
    'M0.100829 47.0671C0.100887 36.2375 0.415993 16.7442 3.74393 10.4131C9.41112 -0.368316 24.4852 0.289637 36.652 0.859711L238.71 10.3271C239.93 10.3843 241.143 10.5515 242.334 10.8266C254.38 13.61 263.624 23.2804 265.861 35.4399L266.078 36.6197C267.357 43.5702 268 50.601 268 57.6681V171.171C268 180.059 264.933 188.698 259.316 195.587C254.282 201.763 246.743 205.346 238.776 205.346H192.705C191.583 205.346 190.261 205.539 188.853 205.856C180.406 207.756 173.788 213.98 168.633 220.936C167.489 222.481 166.227 223.932 164.936 225.357C158.976 231.938 151.013 242 133.634 242C127.855 242 122.519 240.359 118.186 238.299C111.305 235.027 106.409 228.914 101.903 222.771C94.0396 212.049 80.8993 206.67 67.6262 207.456C53.5009 208.291 36.7947 208.233 24.6443 205.346C5.00947 200.681 -0.869851 175.217 0.100829 163.694V47.0671Z'
  );
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.primary};
  font-size: ${p => p.theme.fontSizes[8]}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.whiteText};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Title = styled.span`
  color: ${p =>
    p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.whiteText};
  background-color: ${p =>
    p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
  border-radius: 9999px;
  border: 3px solid
    ${p =>
      p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
  margin-left: auto;
  margin-right: auto;

  :hover {
    color: ${p =>
      p.isError ? p.theme.colors.redValidation : p.theme.colors.greenAccent};
    background-color: transparent;
  }
`;
