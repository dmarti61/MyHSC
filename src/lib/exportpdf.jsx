import jsPDF from 'jspdf';
import { CAREER_STATS } from '@/components/quiz/careerstats';
import { MBTI_MAP, generateNextStepPhrase } from '@/components/quiz/mbtimap';
import { GUIDES_TEXT_CONTENT } from '@/lib/guidestext';
import { interFont } from '@/lib/inter.js';

export const exportResultsAsPDF = ({ type, preference }) => {
  const doc = new jsPDF('p', 'mm', 'a4');
  const mbtiType = type.toUpperCase();
  const mbtiData = MBTI_MAP[mbtiType];
  const pageHeight = doc.internal.pageSize.height;
  const websiteURL = 'https://www.myhscounselor.com';

  if (!mbtiData) {
    console.error(`MBTI data not found for type: ${mbtiType}`);
    return;
  }

  // Register custom fonts
  doc.addFileToVFS('Inter-Regular.ttf', interFont);
  doc.addFont('Inter-Regular.ttf', 'Inter', 'normal');
  doc.setFont('Inter');
  // NOTE: You would need to add a Poppins font file here as well
  // doc.addFileToVFS('Poppins-Bold.ttf', poppinsFont);
  // doc.addFont('Poppins-Bold.ttf', 'Poppins', 'bold');

  // --- Brand-Aligned Colors ---
  const brandDarkBlueGray = '#2c3e50';
  const brandPrimaryBlue = '#2980b9';
  const brandSecondaryBlue = '#3498db';
  const brandSuccessGreen = '#27ae60';
  const brandTextColor = '#616e87';
  const brandBorderColor = '#e0e6f0';
  const brandHighlightBg = '#eaf2f8';


  // --- Summary Page Header ---
  // FIX: Changing the background to a darker color so the white logo can be seen.
  doc.setFillColor(brandDarkBlueGray); 
  doc.rect(0, 0, doc.internal.pageSize.width, 30, 'F');

  const logoWidth = 80;
  const logoHeight = 25;
  const logoX = (doc.internal.pageSize.width - logoWidth) / 2;
  const logoY = 3;
  const logo = '/logo.png';
  doc.addImage(logo, 'PNG', logoX, logoY, logoWidth, logoHeight);

  doc.setFont('Poppins', 'bold'); // Use the brand heading font for the title
  doc.setFontSize(28); // Larger title for impact
  doc.setTextColor(brandDarkBlueGray);
  // FIX: Apply word wrapping to the main title
  const mainTitle = 'Your Quiz Results';
  const wrappedMainTitle = doc.splitTextToSize(mainTitle, 175);
  doc.text(wrappedMainTitle, 15, 55); 
  doc.line(15, 57, 195, 57);

  let y = 68;

  doc.setFontSize(18); // Larger text for personality type
  doc.setTextColor(brandPrimaryBlue);
  doc.setFont('Inter', 'normal');
  // FIX: Apply word wrapping as a precaution
  const personalityTypeText = `Your Personality Type: ${mbtiType}`;
  const wrappedPersonalityTypeText = doc.splitTextToSize(personalityTypeText, 175);
  doc.text(wrappedPersonalityTypeText, 15, y);
  y += 12;

  if (preference) {
    doc.setFontSize(12);
    doc.setTextColor(brandTextColor);
    const found = mbtiData.careers.some(
      (c) => c.postSchoolPath?.toLowerCase() === preference.toLowerCase()
    );
    // FIX: Apply word wrapping as a precaution
    const preferenceText = `Career Pathway Preference: ${
        found ? preference : `${preference} (no direct match found)`
      }`;
    const wrappedPreferenceText = doc.splitTextToSize(preferenceText, 175);
    doc.text(wrappedPreferenceText, 15, y);
    y += 10;
  } else {
    y += 5;
  }

  // Strengths
  doc.setFontSize(16);
  doc.setTextColor(brandPrimaryBlue);
  const strengthsTitle = 'Your Strengths';
  const wrappedStrengthsTitle = doc.splitTextToSize(strengthsTitle, 175);
  doc.text(wrappedStrengthsTitle, 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 10;

  doc.setFontSize(12);
  doc.setTextColor(brandTextColor);
  mbtiData.strengths.forEach((s) => {
    doc.text(`• ${s}`, 20, y);
    y += 8;
  });
  y += 12;

  // Suggested Careers
  doc.setFontSize(16);
  doc.setTextColor(brandPrimaryBlue);
  const careerPathwaysTitle = 'Career Pathways for Your Type';
  const wrappedCareerPathwaysTitle = doc.splitTextToSize(careerPathwaysTitle, 175);
  doc.text(wrappedCareerPathwaysTitle, 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 10;

  const allCareers = [...mbtiData.careers];
  const userPreference = preference?.toLowerCase() || null;

  const starredCareers = userPreference
    ? allCareers.filter((c) => c.postSchoolPath?.toLowerCase() === userPreference)
    : [];

  const nonStarredCareers = userPreference
    ? allCareers.filter((c) => c.postSchoolPath?.toLowerCase() !== userPreference)
    : allCareers;

  const careersToDisplay = [...starredCareers, ...nonStarredCareers];

  careersToDisplay.forEach((c) => {
    const isStarred = userPreference && c.postSchoolPath?.toLowerCase() === userPreference;
    const bullet = isStarred ? '★' : '•';
    const line = `${bullet} ${c.title} (${c.pathway})`;
    doc.setTextColor(isStarred ? brandSecondaryBlue : brandTextColor); // Highlight the starred career
    doc.text(line, 20, y);
    y += 8;
    if (y > pageHeight - 30) {
      doc.addPage();
      y = 30;
    }
  });
  y += 12;

  // Top Career Snapshot
  const topCareer = careersToDisplay.length > 0 ? careersToDisplay[0] : null;
  const topCareerStats = topCareer?.title ? CAREER_STATS[topCareer.title] || {} : {};

  doc.setFontSize(16);
  doc.setTextColor(brandPrimaryBlue);
  // FIX: Apply word wrapping to the career snapshot title
  const topCareerSnapshotTitle = `Top Career Snapshot: ${topCareer?.title || 'N/A'}`;
  const wrappedTopCareerSnapshotTitle = doc.splitTextToSize(topCareerSnapshotTitle, 175);
  doc.text(wrappedTopCareerSnapshotTitle, 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 10;

  doc.setFontSize(12);
  doc.setTextColor(brandTextColor);
  doc.text(`• Salary: ${topCareerStats.salary || 'N/A'}`, 20, y);
  y += 8;
  doc.text(`• Outlook: ${topCareerStats.outlook || 'N/A'}`, 20, y);
  y += 8;
  doc.text(`• Education: ${topCareerStats.education || 'N/A'}`, 20, y);
  y += 12;

  // Next Step
  const nextStepText = generateNextStepPhrase(mbtiData, preference);
  const nextStepPlainText = nextStepText.replace(/<[^>]*>/g, '');
  const wrappedNextStepText = doc.splitTextToSize(nextStepPlainText, 175);

  doc.setFontSize(16);
  doc.setTextColor(brandPrimaryBlue);
  const recommendedNextStepTitle = 'Recommended Next Step';
  const wrappedRecommendedNextStepTitle = doc.splitTextToSize(recommendedNextStepTitle, 175);
  doc.text(wrappedRecommendedNextStepTitle, 15, y);
  doc.line(15, y + 2, 195, y + 2);
  y += 10;

  doc.setFontSize(12);
  doc.setTextColor(brandTextColor);
  doc.text(wrappedNextStepText, 20, y);
  y += wrappedNextStepText.length * 8 + 12;

  // Appendix Guide
  const pathwayMap = {
    college: 'College',
    community: 'Community College',
    trade: 'Trade School',
    job: 'Direct Job Entry',
  };
  const pathwayToUse = preference || mbtiData.careers[0]?.postSchoolPath?.toLowerCase();
  const guideKey = pathwayMap[pathwayToUse] || null;
  const guideContent = guideKey ? GUIDES_TEXT_CONTENT[guideKey] : null;

  if (guideContent) {
    doc.addPage();
    let guideY = 25;

    doc.setFontSize(24);
    doc.setTextColor(brandPrimaryBlue);
    // FIX: Apply word wrapping to the appendix title
    const appendixTitle = `Appendix: The ${guideKey} Guide`;
    const wrappedAppendixTitle = doc.splitTextToSize(appendixTitle, 175);
    doc.text(wrappedAppendixTitle, 15, guideY);
    doc.line(15, guideY + 2, 195, guideY + 2);
    guideY += wrappedAppendixTitle.length * 10 + 5; // Adjust Y position for multi-line headers

    const sections = guideContent.trim().split(/\n\s*##\s*/);
    sections.forEach((section, index) => {
      const lines = section.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) return;

      let sectionTitle = lines[0].trim();
      let sectionContent = lines.slice(1).join('\n').trim();

      if (index === 0 && !sectionTitle.startsWith('#')) {
        sectionTitle = 'Introduction';
        sectionContent = section;
      } else {
        sectionTitle = sectionTitle.replace(/###\s*/, '').trim();
      }

      if (guideY > pageHeight - 40) {
        doc.addPage();
        guideY = 25;
      }

      doc.setFontSize(18);
      doc.setTextColor(brandDarkBlueGray);
      // FIX: Apply text wrapping to the section titles
      const wrappedSectionTitle = doc.splitTextToSize(sectionTitle, 175);
      doc.text(wrappedSectionTitle, 15, guideY);
      guideY += wrappedSectionTitle.length * 8 + 2;

      doc.setFontSize(12);
      doc.setTextColor(brandTextColor);
      const wrappedText = doc.splitTextToSize(sectionContent, 175);
      wrappedText.forEach((line) => {
        if (guideY > pageHeight - 20) {
          doc.addPage();
          guideY = 25;
        }
        doc.text(line, 15, guideY);
        guideY += 8;
      });

      guideY += 12;
    });
  }

  // Footer with page numbers and CTA
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.setTextColor(brandTextColor);
    doc.text(`Find more guides and resources at:`, 15, pageHeight - 14);
    doc.setTextColor(brandPrimaryBlue);
    doc.text(websiteURL, 15, pageHeight - 10);
    const pageNumberText = `Page ${i} of ${totalPages}`;
    doc.setTextColor(brandTextColor);
    doc.text(pageNumberText, doc.internal.pageSize.width - 15, pageHeight - 10, {
      align: 'right',
    });
  }

  doc.save(`${mbtiType}_Quiz_Results.pdf`);
};
