import { Dot } from 'commonComponents/Dot';
import { TitleBox } from 'commonComponents/TitleBox';
import { PageTitle } from 'commonComponents/PageTitle';

export const MainTitle = ({ titleName, children }) => {
  return (
    <TitleBox>
      <PageTitle>
        {titleName}
        {children}
      </PageTitle>
      <Dot dotNumber={0} />
      <Dot dotNumber={1} />
      <Dot dotNumber={2} />
    </TitleBox>
  );
};
