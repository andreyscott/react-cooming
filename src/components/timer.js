import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import './style.css'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      years: 0,
      days: 10,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    const endDate = `${this.props.date} ${this.props.time}`

    // Initialize countdown for the first time
    this.setState(this.calculateCountdown(endDate))

    // Update every second
    this.interval = setInterval(() => {
      const countdown = this.calculateCountdown(endDate);
      countdown ? this.setState(countdown) : this.stop();
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 10,
      hours: 0,
      min: 0,
      sec: 0
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <div className="w-screen flex text-2xl p-4 font-bold md:text-3xl lg:text-5xl  lg:font-extrabold xl:text-6xl overflow-hidden justify-around ">
        {/* {countDown.years > 0 && (
          <span className="">
            <span className="flex  mx-4 my-10  flex-col">
              <strong className=' inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.years)}</strong>
              <span>{countDown.years === 1 ? 'Year' : 'Years'}</span>
            </span>
          </span>
        )} */}

        <span className="inline-block">
          <span className="flex  mx-4 my-10  flex-col">
            <strong className=' inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.days)}</strong>
            <span className=''>{countDown.days === 1 ? 'Day' : 'Days'}</span>
          </span>
        </span>

        <span className="">
          <span className="flex  mx-4 my-10  flex-col">
            <strong className=" inline-block  mx-auto my-10  flex-col">{this.addLeadingZeros(countDown.hours)}</strong>
            <span className=''>{countDown.hours === 1 ? 'Hour' : 'Hours'}</span>
          </span>
        </span>

        <span className="Countdown-col">
          <span className="flex  mx-4 my-10  flex-col">
            <strong className=' inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.min)}</strong>
            <span className='mx-4'>Min</span>
          </span>
        </span>

        <span className="">
          <span className="flex  mx-auto my-10  flex-col">
            <strong className=' inline-block  mx-auto my-10  flex-col'>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>Sec</span>
          </span>
        </span>
      </div>
    )
  }
}

Timer.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

const defaultDate = {
    
  day: new Date().getDate(),
  month: new Date().getMonth() +2,
  year: new Date().getFullYear(),
}

Timer.defaultProps = {
  date: `${defaultDate.month}/${defaultDate.day}/${defaultDate.year}`,
  time: '23:59'
}

export default Timer