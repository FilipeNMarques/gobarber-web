import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  interface MonthAvailabilityItem {
    day: number;
    available: boolean;
  }

  const { signOut, user } = useAuth();
  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then(response => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const disableDays = useMemo(() => {
    const dates = monthAvailability
      .filter(monthDay => monthDay.available === false)
      .map(monthDay => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });
    return dates;
  }, [currentMonth, monthAvailability]);

  return (
    <>
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="Logo Go Barber" />
            <Profile>
              <img src={user.avatar_url} alt={user.name} />
              <div>
                <span>Bem vindo,</span>
                <strong>{user.name}</strong>
              </div>
            </Profile>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </HeaderContent>
        </Header>
        <Content>
          <Schedule>
            <h1>Horários agendados</h1>
            <p>
              <span>Hoje</span>
              <span>Dia 05</span>
              <span>Segunda feira</span>
            </p>
            <NextAppointment>
              <strong>Atendimento a seguir</strong>
              <div>
                <img src={user.avatar_url} alt={user.name} />
                <strong>{user.name}</strong>

                <span>
                  <FiClock />
                  08:00
                </span>
              </div>
            </NextAppointment>
            <Section>
              <strong>Manhã</strong>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  09:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/b572d1b1db5a6556f3a7-photo_2020-08-01_15-50-34.jpg"
                    alt="Foto de Lorena Silva"
                  />
                  <strong>Lorena Silva</strong>
                </div>
              </Appointment>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  10:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/f8d0e0687eb1a8f69134-sousa.jpg"
                    alt="Foto de Andressa Souza"
                  />
                  <strong>Andressa Souza</strong>
                </div>
              </Appointment>
            </Section>
            <Section>
              <strong>Tarde</strong>
              <Appointment>
                <span>
                  <FiClock size={15} />
                  15:00
                </span>
                <div>
                  <img
                    src="https://spicess-images.s3.amazonaws.com/146c6e5e9d98c44cb247-berg.jpeg"
                    alt="Foto de Gutemberg Domingos"
                  />
                  <strong>Gutemberg Domingos</strong>
                </div>
              </Appointment>
            </Section>
          </Schedule>
          <Calendar>
            <DayPicker
              onDayClick={handleDateChange}
              onMonthChange={handleMonthChange}
              selectedDays={selectedDate}
              fromMonth={new Date()}
              weekdaysShort={weekdays}
              months={months}
              disabledDays={[{ daysOfWeek: [0, 6] }, ...disableDays]}
              modifiers={{
                available: { daysOfWeek: [1, 2, 3, 4, 5] },
              }}
            />
          </Calendar>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
