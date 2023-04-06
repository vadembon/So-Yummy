import { Dot } from 'commonComponents/Dot';
import { TitleBox } from './TitleBox';
import { PageTitle } from './PageTitle';

export const TopBox = () => {
  return (
    <TitleBox>
      <PageTitle>Add recipe</PageTitle>
      <Dot dotNumber={0} />
      <Dot dotNumber={1} />
      <Dot dotNumber={2} />
    </TitleBox>
  );
};
