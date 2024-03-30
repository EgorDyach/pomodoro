import { Container } from '../../components/Container';
import { StatisticHeader } from '../../shared/StatisticHeader';
import { StatisticIndicators } from '../../shared/StatisticIndicators';
import { StatisticMain } from '../../shared/StatisticMain';
import './statisticpage.css';

export function StatisticPage() {
  return (
    <div className="statistic__page">
      <Container>
        <StatisticHeader />
        <StatisticMain />
        <StatisticIndicators />
      </Container>
    </div>
  );
}
