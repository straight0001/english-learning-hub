import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Clock, Trophy, Menu, X, BarChart3, Volume2 } from 'lucide-react';

export default function EnglishHub() {
import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle2, Clock, Trophy, Menu, X, BarChart3, Volume2, Play } from 'lucide-react';

export default function EnglishHub() {
  const [currentUnit, setCurrentUnit] = useState(null);
  const [completedUnits, setCompletedUnits] = useState([]);
  const [userStats, setUserStats] = useState({ streak: 0, pointsToday: 0, totalPoints: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('today');
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState(false);

  const vocabData = {
    1: [
      { word: 'Community', ipa: '/kəˈmjuːnəti/', vi: 'Cộng đồng', ex: 'Our community is very friendly' },
      { word: 'Neighbor', ipa: '/ˈneɪbər/', vi: 'Hàng xóm', ex: 'My neighbors are kind people' },
      { word: 'Local', ipa: '/ˈloʊkəl/', vi: 'Địa phương', ex: 'I shop at the local market' },
      { word: 'Volunteer', ipa: '/ˌvɑːlənˈtɪr/', vi: 'Tình nguyện viên', ex: 'She volunteers at the hospital' },
      { word: 'Organize', ipa: '/ˈɔːrɡənaɪz/', vi: 'Tổ chức', ex: 'We organize events every month' },
      { word: 'Gather', ipa: '/ˈɡæðər/', vi: 'Tập hợp', ex: 'We gather for celebrations' },
      { word: 'Support', ipa: '/səˈpɔːrt/', vi: 'Hỗ trợ', ex: 'They support each other' },
      { word: 'Unite', ipa: '/juːˈnaɪt/', vi: 'Liên kết', ex: 'Communities unite for good' },
      { word: 'Connection', ipa: '/kəˈnekʃn/', vi: 'Kết nối', ex: 'We have a strong connection' },
      { word: 'Participate', ipa: '/pɑːrˈtɪsɪpeɪt/', vi: 'Tham gia', ex: 'Everyone participates in activities' },
    ],
    2: [
      { word: 'City', ipa: '/ˈsɪti/', vi: 'Thành phố', ex: 'I live in a big city' },
      { word: 'Urban', ipa: '/ˈɜːrbən/', vi: 'Thành thị', ex: 'Urban life is fast-paced' },
      { word: 'Busy', ipa: '/ˈbɪzi/', vi: 'Bận rộn', ex: 'The city is always busy' },
      { word: 'Convenient', ipa: '/kənˈviːniənt/', vi: 'Tiện lợi', ex: 'City life is convenient' },
      { word: 'Transport', ipa: '/ˈtrænspɔːrt/', vi: 'Vận chuyển', ex: 'Public transport is good' },
      { word: 'Building', ipa: '/ˈbɪldɪŋ/', vi: 'Tòa nhà', ex: 'Tall buildings everywhere' },
      { word: 'Traffic', ipa: '/ˈtræfɪk/', vi: 'Giao thông', ex: 'Heavy traffic during rush hour' },
      { word: 'Crowded', ipa: '/ˈkraʊdɪd/', vi: 'Đông đúc', ex: 'The streets are crowded' },
      { word: 'Noise', ipa: '/nɔɪz/', vi: 'Tiếng ồn', ex: 'There is too much noise' },
      { word: 'Opportunity', ipa: '/ˌɑːpərˈtuːnəti/', vi: 'Cơ hội', ex: 'Cities offer many opportunities' },
    ],
    3: [
      { word: 'Healthy', ipa: '/ˈhelθi/', vi: 'Khỏe mạnh', ex: 'A healthy lifestyle is important' },
      { word: 'Exercise', ipa: '/ˈeksəsaɪz/', vi: 'Tập thể dục', ex: 'I exercise 30 minutes daily' },
      { word: 'Diet', ipa: '/ˈdaɪət/', vi: 'Chế độ ăn', ex: 'A balanced diet helps you stay fit' },
      { word: 'Nutrition', ipa: '/njuːˈtrɪʃn/', vi: 'Dinh dưỡng', ex: 'Good nutrition is essential' },
      { word: 'Calorie', ipa: '/ˈkæləri/', vi: 'Calo', ex: 'This apple has 80 calories' },
      { word: 'Vitamin', ipa: '/ˈvɪtəmɪn/', vi: 'Vitamin', ex: 'Fruits are rich in vitamins' },
      { word: 'Protein', ipa: '/ˈprəʊtiːn/', vi: 'Protein', ex: 'Fish is a good source of protein' },
      { word: 'Junk Food', ipa: '/dʒʌŋk fuːd/', vi: 'Thức ăn bẩn', ex: 'Junk food is bad for health' },
      { word: 'Stress', ipa: '/stres/', vi: 'Căng thẳng', ex: 'Too much stress is harmful' },
      { word: 'Sleep', ipa: '/sliːp/', vi: 'Ngủ', ex: 'You need 8 hours of sleep' },
    ],
    4: [
      { word: 'Remember', ipa: '/rɪˈmembər/', vi: 'Nhớ', ex: 'I remember that day vividly' },
      { word: 'Forget', ipa: '/fərˈɡet/', vi: 'Quên', ex: 'I will never forget this' },
      { word: 'Ancient', ipa: '/ˈeɪnʃənt/', vi: 'Cổ đại', ex: 'Ancient temples are beautiful' },
      { word: 'Monument', ipa: '/ˈmɑːnjumənt/', vi: 'Tượng đài', ex: 'The monument stands tall' },
      { word: 'Heritage', ipa: '/ˈherɪtɪdʒ/', vi: 'Di sản', ex: 'Cultural heritage is valuable' },
      { word: 'Tradition', ipa: '/trəˈdɪʃn/', vi: 'Truyền thống', ex: 'Our family has traditions' },
      { word: 'Custom', ipa: '/ˈkʌstəm/', vi: 'Phong tục', ex: 'It is a local custom' },
      { word: 'Festival', ipa: '/ˈfestɪvl/', vi: 'Lễ hội', ex: 'Tet is an important festival' },
      { word: 'Era', ipa: '/ˈɪrə/', vi: 'Thời kỳ', ex: 'The Stone Age was important' },
      { word: 'Relic', ipa: '/ˈrelɪk/', vi: 'Di vật', ex: 'This is an ancient relic' },
    ],
    5: [
      { word: 'Experience', ipa: '/ɪkˈspɪriəns/', vi: 'Kinh nghiệm', ex: 'I had a wonderful experience' },
      { word: 'Adventure', ipa: '/ədˈventʃər/', vi: 'Cuộc phiêu lưu', ex: 'We had many adventures' },
      { word: 'Journey', ipa: '/ˈdʒɜːrni/', vi: 'Chuyến đi', ex: 'The journey was long' },
      { word: 'Discover', ipa: '/dɪsˈkʌvər/', vi: 'Khám phá', ex: 'We discovered new places' },
      { word: 'Explore', ipa: '/ɪkˈsplɔːr/', vi: 'Khám phá', ex: 'Let\'s explore the city' },
      { word: 'Enjoy', ipa: '/ɪnˈdʒɔɪ/', vi: 'Thích', ex: 'I enjoyed the movie' },
      { word: 'Exciting', ipa: '/ɪkˈsaɪtɪŋ/', vi: 'Thú vị', ex: 'It was very exciting' },
      { word: 'Memorable', ipa: '/ˈmemərəbl/', vi: 'Đáng nhớ', ex: 'A memorable trip' },
      { word: 'Impression', ipa: '/ɪmˈpreʃn/', vi: 'Ấn tượng', ex: 'I had a good impression' },
      { word: 'Unforgettable', ipa: '/ˌʌnfərˈɡetəbl/', vi: 'Không thể quên', ex: 'It was unforgettable' },
    ],
    6: [
      { word: 'Lifestyle', ipa: '/ˈlaɪfstaɪl/', vi: 'Lối sống', ex: 'Vietnamese lifestyle is unique' },
      { word: 'Modern', ipa: '/ˈmɑːdərn/', vi: 'Hiện đại', ex: 'Modern life is different' },
      { word: 'Traditional', ipa: '/trəˈdɪʃənl/', vi: 'Truyền thống', ex: 'Traditional values are important' },
      { word: 'Change', ipa: '/tʃeɪndʒ/', vi: 'Thay đổi', ex: 'Things have changed' },
      { word: 'Adapt', ipa: '/əˈdæpt/', vi: 'Thích ứng', ex: 'We adapt to new situations' },
      { word: 'Develop', ipa: '/dɪˈveləp/', vi: 'Phát triển', ex: 'The country is developing' },
      { word: 'Improve', ipa: '/ɪmˈpruːv/', vi: 'Cải thiện', ex: 'Life has improved' },
      { word: 'Influence', ipa: '/ˈɪnfluəns/', vi: 'Ảnh hưởng', ex: 'Globalization influences us' },
      { word: 'Preserve', ipa: '/prɪˈzɜːrv/', vi: 'Bảo tồn', ex: 'We must preserve traditions' },
      { word: 'Progress', ipa: '/ˈprɑːɡres/', vi: 'Tiến bộ', ex: 'Society makes progress' },
    ],
    7: [
      { word: 'Wonder', ipa: '/ˈwʌndər/', vi: 'Kỳ quan', ex: 'The Pyramids are a wonder' },
      { word: 'Natural', ipa: '/ˈnætʃərəl/', vi: 'Tự nhiên', ex: 'Natural wonders are beautiful' },
      { word: 'Landscape', ipa: '/ˈlændskeɪp/', vi: 'Cảnh quan', ex: 'The landscape is stunning' },
      { word: 'Spectacular', ipa: '/spekˈtækjələr/', vi: 'Tuyệt đẹp', ex: 'Spectacular scenery everywhere' },
      { word: 'Breathtaking', ipa: '/ˈbreθteɪkɪŋ/', vi: 'Ngoạn mục', ex: 'The view is breathtaking' },
      { word: 'Majestic', ipa: '/məˈdʒestɪk/', vi: 'Hùng vĩ', ex: 'Majestic mountains' },
      { word: 'Magnificent', ipa: '/mæɡˈnɪfɪsnt/', vi: 'Tuyệt vời', ex: 'A magnificent view' },
      { word: 'Unique', ipa: '/juːˈniːk/', vi: 'Độc đáo', ex: 'This place is unique' },
      { word: 'Rare', ipa: '/rer/', vi: 'Hiếm', ex: 'A rare species' },
      { word: 'Preserve', ipa: '/prɪˈzɜːrv/', vi: 'Bảo tồn', ex: 'We must preserve nature' },
    ],
    8: [
      { word: 'Tourism', ipa: '/ˈtʊrɪzəm/', vi: 'Du lịch', ex: 'Tourism is important' },
      { word: 'Tourist', ipa: '/ˈtʊrɪst/', vi: 'Du khách', ex: 'Many tourists visit' },
      { word: 'Destination', ipa: '/ˌdestɪˈneɪʃn/', vi: 'Điểm đến', ex: 'A popular destination' },
      { word: 'Attraction', ipa: '/əˈtrækʃn/', vi: 'Điểm thu hút', ex: 'Main attractions here' },
      { word: 'Accommodation', ipa: '/əˌkɑːməˈdeɪʃn/', vi: 'Chỗ ở', ex: 'Good accommodations' },
      { word: 'Sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', vi: 'Tham quan', ex: 'Sightseeing tours available' },
      { word: 'Itinerary', ipa: '/aɪˈtɪnəreri/', vi: 'Lịch trình', ex: 'The itinerary is planned' },
      { word: 'Package', ipa: '/ˈpækɪdʒ/', vi: 'Gói tour', ex: 'A holiday package' },
      { word: 'Scenic', ipa: '/ˈseniːk/', vi: 'Cảnh đẹp', ex: 'Scenic routes' },
      { word: 'Memorable', ipa: '/ˈmemərəbl/', vi: 'Đáng nhớ', ex: 'A memorable trip' },
    ],
    9: [
      { word: 'Language', ipa: '/ˈlæŋɡwɪdʒ/', vi: 'Ngôn ngữ', ex: 'Learning a new language' },
      { word: 'English', ipa: '/ˈɪŋɡlɪʃ/', vi: 'Tiếng Anh', ex: 'English is useful' },
      { word: 'Communicate', ipa: '/kəˈmjuːnɪkeɪt/', vi: 'Giao tiếp', ex: 'Language helps communicate' },
      { word: 'Culture', ipa: '/ˈkʌltʃər/', vi: 'Văn hóa', ex: 'Language reflects culture' },
      { word: 'Fluent', ipa: '/ˈfluːənt/', vi: 'Thành thạo', ex: 'She is fluent in English' },
      { word: 'Accent', ipa: '/ˈæksent/', vi: 'Giọng', ex: 'She has a strong accent' },
      { word: 'Dialect', ipa: '/ˈdaɪəlekt/', vi: 'Phương ngữ', ex: 'Different dialects exist' },
      { word: 'Vocabulary', ipa: '/vəˈkæbjuləri/', vi: 'Từ vựng', ex: 'Build vocabulary daily' },
      { word: 'Grammar', ipa: '/ˈɡræmər/', vi: 'Ngữ pháp', ex: 'Grammar is important' },
      { word: 'Translate', ipa: '/trænzˈleɪt/', vi: 'Dịch', ex: 'Translate this sentence' },
    ],
    10: [
      { word: 'Planet', ipa: '/ˈplænɪt/', vi: 'Hành tinh', ex: 'Earth is our planet' },
      { word: 'Environment', ipa: '/ɪnˈvaɪrənmənt/', vi: 'Môi trường', ex: 'Protect the environment' },
      { word: 'Pollution', ipa: '/pəˈluːʃn/', vi: 'Ô nhiễm', ex: 'Air pollution is serious' },
      { word: 'Climate', ipa: '/ˈklaɪmət/', vi: 'Khí hậu', ex: 'Climate is changing' },
      { word: 'Global Warming', ipa: '/ˈɡloʊbl ˈwɔːrmɪŋ/', vi: 'Nóng lên toàn cầu', ex: 'Global warming affects us' },
      { word: 'Species', ipa: '/ˈspiːʃiːz/', vi: 'Loài', ex: 'Endangered species' },
      { word: 'Ecosystem', ipa: '/ˈiːkoʊsɪstəm/', vi: 'Hệ sinh thái', ex: 'Healthy ecosystem' },
      { word: 'Renewable', ipa: '/rɪˈnjuːəbl/', vi: 'Tái tạo', ex: 'Renewable energy' },
      { word: 'Sustainable', ipa: '/səˈsteɪnəbl/', vi: 'Bền vững', ex: 'Sustainable development' },
      { word: 'Conservation', ipa: '/ˌkɑːnsərˈveɪʃn/', vi: 'Bảo tồn', ex: 'Conservation efforts' },
    ],
    11: [
      { word: 'Device', ipa: '/dɪˈvaɪs/', vi: 'Thiết bị', ex: 'Modern devices everywhere' },
      { word: 'Technology', ipa: '/tekˈnɑːlədʒi/', vi: 'Công nghệ', ex: 'Technology changes life' },
      { word: 'Internet', ipa: '/ˈɪntərnɛt/', vi: 'Internet', ex: 'Internet is fast' },
      { word: 'Digital', ipa: '/ˈdɪdʒɪtl/', vi: 'Kỹ thuật số', ex: 'Digital age' },
      { word: 'Application', ipa: '/ˌæplɪˈkeɪʃn/', vi: 'Ứng dụng', ex: 'Useful applications' },
      { word: 'Network', ipa: '/ˈnetwork/', vi: 'Mạng', ex: 'Global network' },
      { word: 'Social Media', ipa: '/ˈsoʊʃl ˈmiːdiə/', vi: 'Mạng xã hội', ex: 'Social media is popular' },
      { word: 'Artificial Intelligence', ipa: '/ɑːrˌtɪfɪʃl ɪnˈtelɪdʒəns/', vi: 'AI', ex: 'AI is developing fast' },
      { word: 'Cyber', ipa: '/ˈsaɪbər/', vi: 'Mạng', ex: 'Cybersecurity is important' },
      { word: 'Innovation', ipa: '/ˌɪnəˈveɪʃn/', vi: 'Đổi mới', ex: 'Constant innovation' },
    ],
    12: [
      { word: 'Career', ipa: '/kəˈrɪr/', vi: 'Sự nghiệp', ex: 'Planning a career' },
      { word: 'Job', ipa: '/dʒɑːb/', vi: 'Công việc', ex: 'Finding a job' },
      { word: 'Skill', ipa: '/skɪl/', vi: 'Kỹ năng', ex: 'Develop your skills' },
      { word: 'Education', ipa: '/ˌedʒuˈkeɪʃn/', vi: 'Giáo dục', ex: 'Education is important' },
      { word: 'Qualification', ipa: '/ˌkwɑːlɪfɪˈkeɪʃn/', vi: 'Bằng cấp', ex: 'Good qualifications' },
      { word: 'Interview', ipa: '/ˈɪntərvjuː/', vi: 'Phỏng vấn', ex: 'Job interview' },
      { word: 'Resume', ipa: '/ˈrezumeɪ/', vi: 'CV', ex: 'Submit your resume' },
      { word: 'Opportunity', ipa: '/ˌɑːpərˈtuːnəti/', vi: 'Cơ hội', ex: 'Career opportunities' },
      { word: 'Success', ipa: '/səkˈses/', vi: 'Thành công', ex: 'Success requires effort' },
      { word: 'Achievement', ipa: '/əˈtʃiːvmənt/', vi: 'Thành tích', ex: 'Great achievements' },
    ]
  };

  const grammarData = {
    1: {
      title: 'Present Simple & There is/are',
      points: [
        { name: 'Present Simple', usage: 'Hành động xảy ra thường xuyên', structure: 'S + V / S + does/do not + V', examples: ['I volunteer in my community.', 'We gather every weekend.'], ytLink: 'https://www.youtube.com/results?search_query=present+simple+zim' },
        { name: 'There is / There are', usage: 'Chỉ sự tồn tại', structure: 'There is + singular / There are + plural', examples: ['There is a community center.', 'There are many volunteers.'], ytLink: 'https://www.youtube.com/results?search_query=there+is+are+zim' }
      ]
    },
    2: {
      title: 'Present Continuous & Comparatives',
      points: [
        { name: 'Present Continuous', usage: 'Hành động đang xảy ra', structure: 'S + am/is/are + V-ing', examples: ['I am living in the city.', 'They are traveling.'], ytLink: 'https://www.youtube.com/results?search_query=present+continuous+zim' },
        { name: 'Comparatives', usage: 'So sánh 2 người/vật', structure: 'Adj+er / more + Adj', examples: ['City life is busier.', 'The city is more convenient.'], ytLink: 'https://www.youtube.com/results?search_query=comparatives+zim' }
      ]
    },
    3: {
      title: 'Should/Should not & Have to',
      points: [
        { name: 'Should / Should not', usage: 'Lời khuyên', structure: 'S + should/should not + V', examples: ['You should eat vegetables.', 'They shouldn\'t stay up late.'], ytLink: 'https://www.youtube.com/results?search_query=should+zim' },
        { name: 'Have to / Don\'t have to', usage: 'Bắt buộc/Không bắt buộc', structure: 'S + have/has to + V', examples: ['I have to wake up early.', 'You don\'t have to go.'], ytLink: 'https://www.youtube.com/results?search_query=have+to+zim' }
      ]
    },
    4: {
      title: 'Simple Past & Past Continuous',
      points: [
        { name: 'Simple Past', usage: 'Hành động hoàn thành', structure: 'S + V-ed / V2', examples: ['I visited yesterday.', 'She went to school.'], ytLink: 'https://www.youtube.com/results?search_query=simple+past+zim' },
        { name: 'Past Continuous', usage: 'Hành động đang xảy ra', structure: 'S + was/were + V-ing', examples: ['I was playing when he arrived.', 'They were studying.'], ytLink: 'https://www.youtube.com/results?search_query=past+continuous+zim' }
      ]
    },
    5: {
      title: 'Present Perfect',
      points: [
        { name: 'Present Perfect', usage: 'Hành động từ quá khứ đến hiện tại', structure: 'S + have/has + V3', examples: ['I have visited many places.', 'She has explored the city.'], ytLink: 'https://www.youtube.com/results?search_query=present+perfect+zim' },
        { name: 'For & Since', usage: 'Thời gian trong Present Perfect', structure: 'For + khoảng thời gian / Since + điểm thời gian', examples: ['I have lived here for 5 years.', 'We have known each other since 2020.'], ytLink: 'https://www.youtube.com/results?search_query=for+since+zim' }
      ]
    },
    6: {
      title: 'Superlatives & Comparatives',
      points: [
        { name: 'Superlatives', usage: 'Mức độ cao nhất', structure: 'Adj+est / most + Adj', examples: ['This is the best movie.', 'It\'s the most beautiful place.'], ytLink: 'https://www.youtube.com/results?search_query=superlatives+zim' },
        { name: 'Comparatives Review', usage: 'So sánh', structure: 'Adj+er / more + Adj', examples: ['Modern life is more comfortable.', 'Technology is faster.'], ytLink: 'https://www.youtube.com/results?search_query=comparatives+zim' }
      ]
    },
    7: {
      title: 'Present Perfect & Passive Voice',
      points: [
        { name: 'Present Perfect Continuous', usage: 'Hành động bắt đầu từ quá khứ', structure: 'S + have/has been + V-ing', examples: ['I have been studying for 3 hours.', 'They have been exploring.'], ytLink: 'https://www.youtube.com/results?search_query=present+perfect+continuous+zim' },
        { name: 'Passive Voice', usage: 'Tập trung vào hành động, không chủ thể', structure: 'S + am/is/are + V3', examples: ['The temple is preserved.', 'These wonders are protected.'], ytLink: 'https://www.youtube.com/results?search_query=passive+voice+zim' }
      ]
    },
    8: {
      title: 'Modals: Can, Could, May, Might',
      points: [
        { name: 'Can / Could', usage: 'Khả năng', structure: 'S + can/could + V', examples: ['You can visit the museum.', 'I could travel around.'], ytLink: 'https://www.youtube.com/results?search_query=can+could+zim' },
        { name: 'May / Might', usage: 'Khả năng có thể', structure: 'S + may/might + V', examples: ['You may book a tour.', 'It might rain tomorrow.'], ytLink: 'https://www.youtube.com/results?search_query=may+might+zim' }
      ]
    },
    9: {
      title: 'Reported Speech',
      points: [
        { name: 'Reported Speech', usage: 'Tường thuật lại lời nói', structure: 'S + said (that) + ...', examples: ['She said she loved languages.', 'He told me he was learning.'], ytLink: 'https://www.youtube.com/results?search_query=reported+speech+zim' },
        { name: 'Questions in Reported Speech', usage: 'Tường thuật câu hỏi', structure: 'S + asked + if/whether/question word', examples: ['He asked if she spoke English.', 'I asked what she did.'], ytLink: 'https://www.youtube.com/results?search_query=reported+questions+zim' }
      ]
    },
    10: {
      title: 'Conditional Sentences',
      points: [
        { name: 'First Conditional (If + Present, will + V)', usage: 'Điều kiện có thể xảy ra', structure: 'If + S + V (present), S + will + V', examples: ['If we protect nature, we will save the planet.', 'If you recycle, you help the environment.'], ytLink: 'https://www.youtube.com/results?search_query=first+conditional+zim' },
        { name: 'Second Conditional (If + Past, would + V)', usage: 'Điều kiện không thể xảy ra', structure: 'If + S + V-ed, S + would + V', examples: ['If I were you, I would protect the environment.', 'If we had more trees, the air would be cleaner.'], ytLink: 'https://www.youtube.com/results?search_query=second+conditional+zim' }
      ]
    },
    11: {
      title: 'Future Tenses',
      points: [
        { name: 'Simple Future (will)', usage: 'Tương lai đơn', structure: 'S + will + V', examples: ['Technology will change our lives.', 'AI will become more advanced.'], ytLink: 'https://www.youtube.com/results?search_query=will+future+zim' },
        { name: 'Going to', usage: 'Kế hoạch trong tương lai gần', structure: 'S + am/is/are + going to + V', examples: ['I am going to buy a new device.', 'She is going to learn coding.'], ytLink: 'https://www.youtube.com/results?search_query=going+to+zim' }
      ]
    },
    12: {
      title: 'Present Perfect & Future Continuous',
      points: [
        { name: 'Present Perfect', usage: 'Kinh nghiệm trong đời', structure: 'S + have/has + V3', examples: ['I have worked as a teacher.', 'She has achieved many things.'], ytLink: 'https://www.youtube.com/results?search_query=present+perfect+zim' },
        { name: 'Future Continuous', usage: 'Hành động tiếp diễn trong tương lai', structure: 'S + will be + V-ing', examples: ['Next month I will be working on a project.', 'He will be interviewing candidates.'], ytLink: 'https://www.youtube.com/results?search_query=future+continuous+zim' }
      ]
    }
  };

  const dailyExercises = {
    1: [
      { type: 'fill', question: 'My __________ is very friendly and helpful.', options: [], answer: 'community / neighbor', explanation: 'Community = cộng đồng, Neighbor = hàng xóm' },
      { type: 'multiple', question: 'We __________ at the park every weekend.', options: ['organize', 'gather', 'support', 'participate'], answer: 'gather', explanation: 'Gather = tập hợp, gặp mặt' },
      { type: 'fill', question: 'I __________ (volunteer) at the local hospital.', options: [], answer: 'volunteer', explanation: 'Volunteer = tình nguyện' },
      { type: 'multiple', question: 'Everyone in our community __________ in local activities.', options: ['unite', 'participate', 'organize', 'connect'], answer: 'participate', explanation: 'Participate = tham gia' },
      { type: 'fill', question: 'We need to __________ the event for next month.', options: [], answer: 'organize', explanation: 'Organize = tổ chức' }
    ],
    2: [
      { type: 'fill', question: 'Living in the __________ has many advantages.', options: [], answer: 'city', explanation: 'City = thành phố' },
      { type: 'multiple', question: 'City life is __________ but also stressful.', options: ['busy', 'crowded', 'convenient', 'quiet'], answer: 'convenient', explanation: 'Convenient = tiện lợi' },
      { type: 'fill', question: 'There is heavy __________ during rush hour.', options: [], answer: 'traffic', explanation: 'Traffic = giao thông' },
      { type: 'multiple', question: 'The streets are very __________. It\'s hard to move around.', options: ['busy', 'crowded', 'loud', 'clean'], answer: 'crowded', explanation: 'Crowded = đông đúc' },
      { type: 'fill', question: 'Public __________ is good in the city.', options: [], answer: 'transport', explanation: 'Transport = vận chuyển, phương tiện' }
    ],
    3: [
      { type: 'fill', question: 'You __________ eat more fruits and vegetables.', options: [], answer: 'should', explanation: 'Should dùng để đưa ra lời khuyên' },
      { type: 'multiple', question: 'I __________ wake up early for school.', options: ['should', 'have to', 'must', 'need'], answer: 'have to', explanation: 'Have to dùng cho sự bắt buộc' },
      { type: 'fill', question: 'He __________ (not eat) junk food every day.', options: [], answer: 'shouldn\'t eat', explanation: 'Should not = shouldn\'t (lời khuyên)' },
      { type: 'multiple', question: 'Athletes __________ train very hard.', options: ['should', 'have to', 'don\'t have to', 'shouldn\'t'], answer: 'have to', explanation: 'Vận động viên phải tập luyện (bắt buộc)' },
      { type: 'fill', question: 'You __________ follow a strict diet if you\'re already fit.', options: [], answer: 'don\'t have to', explanation: 'Don\'t have to = không phải bắt buộc' }
    ],
    4: [
      { type: 'fill', question: 'I __________ (visit) the ancient temple yesterday.', options: [], answer: 'visited', explanation: 'Simple past: hành động hoàn thành' },
      { type: 'multiple', question: 'When the teacher entered, students __________ study.', options: ['studied', 'were studying', 'had studied', 'study'], answer: 'were studying', explanation: 'Past continuous: hành động đang xảy ra khi...' },
      { type: 'fill', question: 'She __________ (use to / used to) visit her grandparents every summer.', options: [], answer: 'used to', explanation: 'Used to (thói quen trong quá khứ)' },
      { type: 'multiple', question: 'While I __________ in the park, I found old coins.', options: ['walked', 'was walking', 'have walked', 'had walked'], answer: 'was walking', explanation: 'Past continuous trong while clause' },
      { type: 'fill', question: 'They __________ (not remember) where they __________ (go) last year.', options: [], answer: 'didn\'t remember / went', explanation: 'Simple past cho cả 2 hành động trong quá khứ' }
    ]
  };

  const units = [
    { id: 1, title: 'Unit 1: Local Community', level: 'Basic', color: 'from-blue-400 to-blue-600', progress: 100 },
    { id: 2, title: 'Unit 2: City Life', level: 'Intermediate', color: 'from-green-400 to-green-600', progress: 85 },
    { id: 3, title: 'Unit 3: Healthy Living for Teens', level: 'Intermediate', color: 'from-red-400 to-red-600', progress: 100 },
    { id: 4, title: 'Unit 4: Remembering the Past', level: 'Intermediate+', color: 'from-purple-400 to-purple-600', progress: 95 },
    { id: 5, title: 'Unit 5: Our Experiences', level: 'Intermediate+', color: 'from-yellow-400 to-yellow-600', progress: 60, unlock: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
    { id: 6, title: 'Unit 6: Vietnamese Lifestyle', level: 'Advanced', color: 'from-pink-400 to-pink-600', progress: 0, unlock: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) }
  ];

  useEffect(() => {
    const todayUnit = units[Math.floor(Date.now() / (3 * 24 * 60 * 60 * 1000)) % units.length];
    setCurrentUnit(todayUnit);
  }, []);

  const playAudio = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const VocabularyTable = ({ unitId }) => {
    const vocab = vocabData[unitId] || [];
    return (
      <div className="bg-white rounded-lg p-6 shadow-md overflow-x-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">📚 Vocabulary</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <th className="border p-3 text-left">Word</th>
              <th className="border p-3 text-left">IPA</th>
              <th className="border p-3 text-left">Audio</th>
              <th className="border p-3 text-left">Vietnamese</th>
              <th className="border p-3 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {vocab.map((v, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="border p-3 font-bold text-blue-600">{v.word}</td>
                <td className="border p-3 text-gray-600 font-mono text-sm">{v.ipa}</td>
                <td className="border p-3">
                  <button onClick={() => playAudio(v.word)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-2 text-sm">
                    <Volume2 className="w-4 h-4" /> Play
                  </button>
                </td>
                <td className="border p-3 text-gray-700">{v.vi}</td>
                <td className="border p-3 text-gray-600 text-sm italic">"{v.ex}"</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const GrammarSection = ({ unitId }) => {
    const grammar = grammarData[unitId];
    if (!grammar) return null;
    
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">📖 {grammar.title}</h3>
        <div className="space-y-6">
          {grammar.points.map((point, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-xl font-bold text-blue-600 mb-3">{point.name}</h4>
              
              <div className="bg-blue-50 p-4 rounded mb-3">
                <p className="text-sm font-semibold text-gray-700"><span className="text-blue-600">📌 Usage:</span> {point.usage}</p>
              </div>

              <div className="bg-green-50 p-4 rounded mb-3">
                <p className="text-sm font-semibold text-gray-700"><span className="text-green-600">🔧 Structure:</span></p>
                <p className="font-mono text-sm text-green-700 mt-1">{point.structure}</p>
              </div>

              <div className="bg-purple-50 p-4 rounded mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-2"><span className="text-purple-600">💡 Examples:</span></p>
                <ul className="space-y-1">
                  {point.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-gray-700">• {ex}</li>
                  ))}
                </ul>
              </div>

              <a href={point.ytLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-bold">
                📺 Watch on YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ExerciseSection = ({ unitId }) => {
    const exercises = dailyExercises[unitId] || [];
    
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">✏️ Daily Exercises (5)</h3>
          <button 
            onClick={() => setShowAnswers(!showAnswers)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold"
          >
            {showAnswers ? '🔒 Hide Answers' : '🔓 Show Answers'}
          </button>
        </div>

        <div className="space-y-6">
          {exercises.map((ex, idx) => (
            <div key={idx} className="border-l-4 border-yellow-500 pl-4 pb-4">
              <div className="bg-yellow-50 p-4 rounded mb-3">
                <p className="font-bold text-gray-800 mb-3"><span className="bg-yellow-200 px-2 py-1 rounded">Exercise {idx + 1}</span></p>
                <p className="text-gray-700">{ex.question}</p>
              </div>

              {ex.type === 'multiple' ? (
                <div className="space-y-2 mb-3">
                  {ex.options.map((opt, i) => (
                    <label key={i} className="flex items-center p-2 border rounded hover:bg-gray-100 cursor-pointer">
                      <input 
                        type="radio" 
                        name={`q${idx}`}
                        value={opt}
                        onChange={(e) => setExerciseAnswers({...exerciseAnswers, [idx]: e.target.value})}
                        className="mr-3"
                      />
                      <span className={exerciseAnswers[idx] === opt ? 'font-bold text-blue-600' : ''}>{opt}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Your answer"
                  value={exerciseAnswers[idx] || ''}
                  onChange={(e) => setExerciseAnswers({...exerciseAnswers, [idx]: e.target.value})}
                  className="w-full p-2 border rounded mb-3 text-sm"
                />
              )}

              {showAnswers && (
                <div className="bg-green-100 p-3 rounded text-sm">
                  <p className="font-bold text-green-700">✓ Answer: {ex.answer}</p>
                  <p className="text-gray-700 mt-1">{ex.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          onClick={() => handleCompleteLesson(unitId)}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700"
        >
          ✓ Complete Today's Exercises
        </button>
      </div>
    );
  };

  const handleCompleteLesson = (unitId) => {
    if (!completedUnits.includes(unitId)) {
      setCompletedUnits([...completedUnits, unitId]);
      setUserStats({
        ...userStats,
        pointsToday: userStats.pointsToday + 50,
        totalPoints: userStats.totalPoints + 50,
        streak: userStats.streak + 1
      });
      alert('🎉 Great job! You earned 50 points!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-2xl font-bold">English Learning Hub</h1>
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
            {showMenu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`${showMenu ? 'block' : 'hidden'} md:block bg-white shadow-md`}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 p-4">
          {['today', 'allunits', 'progress', 'about'].map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowMenu(false); }}
              className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              {tab === 'about' ? 'About' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 pb-20">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <Trophy className="w-6 h-6 mx-auto text-yellow-500 mb-2" />
            <p className="text-gray-600 text-sm">Streak</p>
            <p className="text-3xl font-bold text-blue-600">{userStats.streak}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <BarChart3 className="w-6 h-6 mx-auto text-green-500 mb-2" />
            <p className="text-gray-600 text-sm">Today Points</p>
            <p className="text-3xl font-bold text-green-600">{userStats.pointsToday}</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <BookOpen className="w-6 h-6 mx-auto text-purple-500 mb-2" />
            <p className="text-gray-600 text-sm">Total Points</p>
            <p className="text-3xl font-bold text-purple-600">{userStats.totalPoints}</p>
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'today' && currentUnit && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6" />
                <p className="text-lg">Today's Unit</p>
              </div>
              <h2 className="text-4xl font-bold mb-4">{currentUnit.title}</h2>
              <p className="text-blue-100">Level: {currentUnit.level}</p>
            </div>

            <VocabularyTable unitId={currentUnit.id} />
            <GrammarSection unitId={currentUnit.id} />
            <ExerciseSection unitId={currentUnit.id} />
          </div>
        )}

        {activeTab === 'allunits' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">All Units</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {units.map(unit => (
                <div 
                  key={unit.id}
                  onClick={() => !unit.unlock && setCurrentUnit(unit)}
                  className={`rounded-lg p-6 text-white shadow-lg cursor-pointer hover:shadow-xl transition bg-gradient-to-br ${unit.color} ${unit.unlock && new Date() < unit.unlock ? 'opacity-50' : 'hover:scale-105'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{unit.title}</h3>
                    {completedUnits.includes(unit.id) && <CheckCircle2 className="w-6 h-6" />}
                  </div>
                  <p className="text-sm opacity-90 mb-3">{unit.level}</p>
                  <div className="mt-4 bg-white/30 rounded-full h-2 overflow-hidden">
                    <div className="bg-white h-full transition-all" style={{ width: `${unit.progress}%` }}></div>
                  </div>
                  <p className="text-xs mt-2 opacity-80">{unit.progress}% Complete</p>
                  {unit.unlock && new Date() < unit.unlock && (
                    <p className="text-xs mt-2 text-yellow-200">🔒 Unlocks: {unit.unlock?.toLocaleDateString()}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">📊 Your Progress</h2>
            <div className="space-y-4">
              {units.map(unit => (
                <div key={unit.id} className="border-b pb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{unit.title}</span>
                    <span className="text-gray-600">{unit.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${unit.color}`} style={{ width: `${unit.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">ℹ️ About This Platform</h2>
            <p className="text-gray-700">Welcome to English Learning Hub! 🎉</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-bold text-blue-600 mb-2">📚 Features:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Auto-update Unit every 3 days</li>
                <li>Vocabulary with audio & IPA pronunciation</li>
                <li>Detailed grammar with YouTube links</li>
                <li>5 daily exercises for practice</li>
                <li>Track your progress & earn points</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-bold text-purple-600 mb-2">🎯 Goal:</p>
              <p className="text-gray-700 text-sm">Help you master English from level 9 to 10 and prepare for specialized exams & IOE.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-green-600 mb-2">📺 Grammar Reference:</p>
              <p className="text-gray-700 text-sm">All grammar explanations based on Zim English YouTube channel for better understanding.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
}